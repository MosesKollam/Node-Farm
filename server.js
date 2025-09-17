const http = require('http');
const url = require('url');
const fs = require('fs');
const path_p = require('path');
const slugify = require('slugify');

const edited_html = require('edit_html.js');
const dataPath = 'data.json';
// const base_path = 'D:\\complete-node-bootcamp-master (1)\\Node Tutorials\\veg_farm';

const indexFile = fs.readFileSync('index.html', 'utf-8');
const index_card = fs.readFileSync('index-cards.html', 'utf-8');
const productFile = fs.readFileSync('product.html', 'utf-8');
const sdata = fs.readFileSync(dataPath, 'utf-8');
let jdata = JSON.parse(sdata);

fs.readFile(dataPath, 'utf-8', function (error, data) {
    let contentType = 'text/plain';
    if (error){
        console.log(error);
    }
    const server = http.createServer(function (request, response){
        const tar = request.url;
        const {query,pathname} = url.parse(tar,true);
        if (pathname === "/" || pathname === "/overview") {
            const modified = jdata.map(function (element) {
                return edited_html(index_card, element);
            });
            response.writeHead(200, {'Content-type':'text/html'});
            const output = indexFile.replace(/{%ProductCards%}/g, modified.join(""));
            response.end(output);
        } else if (pathname === "/product") {
            const product_file = edited_html(productFile,jdata[query.id]);
            
            response.writeHead(200,{'Content-type':'text\html'});
            response.end(product_file);
        } else if (pathname === "/api") {
            response.writeHead(200, { 'Content-type': 'application/json' });
            response.end(JSON.stringify(jdata));
        }else {
            const ext = path_p.join(base_path, pathname);
            fs.readFile(ext, function (error, file_data) {
                const extension = path_p.extname(ext);
                if (extension === '.css') contentType = 'text/css';
                else if (extension === '.js') contentType = 'application/javascript';
                else if (extension === '.html') contentType = 'text/html';
                else if (extension === '.png') contentType = 'image/png'; 
                else if (extension === '.jpg' || extension === '.jpeg') contentType = 'image/jpeg';
                response.writeHead(200, { 'Content-type': contentType });
                response.end(file_data);
            });
        }
    });

    server.listen(8000, '127.0.0.1', function () {
        console.log('Server Listening on http://127.0.0.1:8000');
    });

});
