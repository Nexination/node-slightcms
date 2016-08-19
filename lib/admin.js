"use strict";
class Server {
  constructor() {
    this.server = {};
    this.server.http = require('http');
    this.server.route = {
      "books": {
        "1": "bookShelf"
      }
    };
    this.server.http.createServer((request, response) => {this.handleRequest(request, response);}).listen(8080);
  }
  handleRequest(request, response) {
    let body = '';
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      let path = request.url.split('/');
      let tempPath = Object.create(this.server.route);
      console.log(request.url);
      
      for(let i = 0; i < path.length; i += 1) {
        if(tempPath[path[i]] !== undefined) {
          tempPath = tempPath[path[i]];
        };
      };
      if(typeof this[tempPath] === 'function') {
        response.end(this[tempPath](request, response));
      }
      else {
        response.end(body);
      };
    });
  }
  bookShelf(request, response) {
    return 'stop reading books';
  }
}
exports.server = Server;