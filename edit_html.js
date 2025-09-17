module.exports = function (html_file, product) {
    // generate slug from product-title
    html_file = html_file.replace(/{%ProductTitle%}/g,product["product-title"]);
    html_file = html_file.replace(/{%icon%}/g, product["icon"]);
    html_file = html_file.replace(/{%quantity%}/g, product["quantity"]);
    html_file = html_file.replace(/{%price%}/g, product["price"]);
    html_file = html_file.replace(/{%ID%}/g, product["id"]);
    html_file = html_file.replace(/{%AboutProduct%}/g, product["about-product"]);
    html_file = html_file.replace(/{%vitamins%}/g, product["vitamins"]);
    html_file = html_file.replace(/{%origin%}/g, product["origin"]);
    html_file = html_file.replace(/{%ProductImage%}/g, product["image"]);

    return html_file;
}

