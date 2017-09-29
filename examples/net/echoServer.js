/**
 * echo server
 *
 * run this server:
 * 1. node echoServer.js 
 * 2. # keep this terminal window open
 * 3. # in another window
 * 4. nc localhost 8080
 * 5. type something
 * 6. see data come back!
 */
const net = require('net');
const PORT = 8080;
const HOST = '127.0.0.1';



// create a tcp server
// =====
// 1. pass in a function that will be called when a client connects
// 2. this function can be an anonymous function expression or a named 
//    function
const server = net.createServer((sock) => {
    console.log('client connected:', sock.remoteAddress, sock.remotePort);

    // define a function that will be called when server receives data
    sock.on('data', (binaryData) => {
        // Buffer object is passed in to call back when data is received. 
        // Buffer object represents data from client, but must be converted
        // into a string if we want to use it as a string:
        const s = binaryData + '';

        console.log('got data!', s);
        sock.write('echo: ' + s); 

        // close the connection
        sock.end();
    });
    /**
     * A couple of alternate ways to define a callback...
     *
     * If you want a named callback outside of this function, then
     * you'll need to find a way to supply the socket object to it (because
     * it won't be in scope!). See the handleData function near the end 
     * of this file.
     *
     * 1. you can bind the socket object explicitly when passing handleData to
     *    sock.on
     * 2. wrap a call to the outer function with a one argument anonymous function
     *    ... and within that, call handleData
     *
     * Uncomment one of the lines below, along with the handleData function...
     * and comment out the above call to sock.on to see this at work!
     */
    // sock.on('data', handleData.bind(null, sock));
    // sock.on('data', (binaryData) => { handleData(sock, binaryData); });

});

/*
function handleData(sock, binaryData) {
    const s = binaryData + '';
    console.log('got data!', s);
    sock.write('echo: ' + s); 
    sock.end();
}
*/

// bind to server and port!
server.listen(PORT, HOST);
console.log('started server on port', PORT, '...press ctrl + c to close!');
