function post() {
var xhr = new XMLHttpRequest();
xhr.open("POST", '/keepalive', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    keepalive: true
}));
setTimeout(() => {
post();
},
19000);
};

post()