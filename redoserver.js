const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

const base_path = 'D://complete-node-bootcamp-master (1)//Node Tutorials//veg_farm';

let index = fs.readFileSync(path.join(base_path, 'index.html'),'utf-8');
let index_cards = fs.readFileSync(path.join(base_path, 'index-cards.html'),'utf-8');
let product = fs.readFileSync(path.join(base_path, 'product.html'),'utf-8');

const json_path = 'D://complete-node-bootcamp-master (1)//Files//JSON//data.json';
const json = fs.readFileSync(json_path, 'utf-8');
const jdata = JSON.parse(json);
function html_json(html_file, json) {
    let html_return = html_file.replace(/{%icon%}/g, json["icon"]);
    html_return = html_return.replace(/{%ProductTitle%}/g, json["product-title"]);
    html_return = html_return.replace(/{%ProductImage%}/g, json["image"]);
    html_return = html_return.replace(/{%origin%}/g, json["origin"]);
    html_return = html_return.replace(/{%vitamins%}/g, json["vitamins"]);
    html_return = html_return.replace(/{%quantity%}/g, json["quantity"]);
    html_return = html_return.replace(/{%price%}/g, json["price"]);
    html_return = html_return.replace(/{%AboutProduct%}/g, json["about-product"]);
    html_return = html_return.replace(/{%ID%}/g, json["id"]);
    console.log(html_return);
    return html_return;
}

fs.readFile(json_path, 'utf-8', function (error, data) {
    if (error) {
        console.log(error);
        return;
    }
    const server = http.createServer(function (request, response) {
        const url_path = request.url;
        const { query, pathname } = url.parse(url_path, true);
        if (pathname === '/' || pathname === 'overview') {
            response.writeHead(200, { 'Content-type': 'text/html' });
            const card_html = jdata.map(function (element) {
                console.log(index_cards);
                return html_json(index_cards, element);
            });
            response.end(index.replace((/%ProductCards%/g), card_html.join("")));
        } else if (pathname === '/product') {
        } else {
            let contentType = 'text/plain';
            const path_request = path.join(base_path, pathname);
            fs.readFile(path_request, function (error, data) {
                const extension = path.extname(path_request);
                if (extension === '.css') contentType = 'text/css';
                else if (extension === '.js') contentType = 'application/javascript';
                else if (extension === '.html') contentType = 'text/html';
                else if (extension === '.jpg' || extension === '.jpeg') contentType = 'image/jpeg';
                response.writeHead(200, { 'Content-type': contentType });
                response.end(data);
            })
        }
    });
    server.listen(8000, '127.0.0.1', function () {
        console.log('Server Listening');
    })
});