/** 
 * AIT - building an http server on top of the net module
 * this program displays a page that says hello if you go to
 * http://localhost:8080/hello... and goodbye if you go to 
 * http://localhost:8080/goodbye
 */

/** 
 * the net module is built-in to node, so no need to npm
 * install, just require
 */
const net = require('net');

/**
 * Request object - takes http request string and parses out path
 * @param s - http request as string
 */
class Request {
    constructor(s) {
        const path = s.split(' ')[1];
        this.path = path;
    }
}

/**
 * 
 * helper function to wrap a status and body
 * in a valid http response
 * @param status - an http response status code 
 * @param body - the body of the http response to be sent back
 */
function createResponse(status, body) {
    return `HTTP/1.1 ${status} OK
Content-Type: text/html

${body}`;
}

/** use destructring syntax to create two variables, for
 * host and port
 */
const [HOST, PORT] = ['127.0.0.1', 8080];

/* *
 * object that holds all of our possible paths, along with a corresponding
 * function that handles that path and returns an http response via sock.write
 */
const routes = {
    '/hello' : (sock) => { sock.write(createResponse(200, '<h1>HELLO THERE</h1>' )); },
    '/goodbye' : (sock) => { sock.write(createResponse(200, '<em>see ya later</em>>' )); },
    '/foo' : (sock) => { sock.write(createResponse(200, 'barbarbarbar' )); }
};


// create a server
// when a client connects call the callback function provided (the arrow 
// function that takes a socket as an argument)
const server = net.createServer((sock) => {

    // do this stuff when a client connects (this function
    // is called when a client connects)....
    
    // show the connected client's ip address and port
    console.log(sock.remoteAddress, sock.remotePort);

    // when the connected client sends us data...
    sock.on('data', (binaryData) => {

        // convert buffer object to string, and use request object
        // to parse http request string into actual object
        const req = new Request(binaryData + '');
        console.log('path', req.path);

        // with the request object's path, find the right function to 
        // handle the path (or 404 if we don't handle that path)
        if(routes.hasOwnProperty(req.path)) {
            const requestHandler = routes[req.path];
            requestHandler(sock);
        } else {
            sock.write(createResponse(404, 'this is a 404!'));
        }

        // close the connection to the client
        sock.end();
    });
});

// listen on this port and address (if using 127.0.0.1, then accessible in
// browser as localhost:8080)
server.listen(PORT, HOST);



















