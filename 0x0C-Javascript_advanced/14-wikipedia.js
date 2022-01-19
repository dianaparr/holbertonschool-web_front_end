// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function createElement(data) {
    let addParagraph = document.createElement("p");
    addParagraph.innerHTML = data;
    document.body.appendChild(addParagraph);
};

const urlAPI = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

function queryWikipedia(callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                let data = JSON.parse(xhttp.responseText);
                callback(data.query.pages["21721040"].extract);
            } else {
                const error = new Error(`Error ${urlAPI}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
};

queryWikipedia(createElement);
