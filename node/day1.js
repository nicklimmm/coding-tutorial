/*
Node.js -> open source, cross-platform runtime environment for developing server-side and networking applications
        -> Written in JS

Features
- Asynchronous and event driven
- High Performance, Scalability

Where to use
- Data streaming apps
- Data intensive real-time apps
- JSON APIs based apps
- Single page apps

Where not to use
- CPU intensive applications

Node.js apps usually consists of:
- Import required modules
- Create server
- Read request and return response
*/

// Import required modules
const http = require("http");

// Create server, read request and return response
const hostname = "127.0.0.10";
const port = 8000;

const server = http.createServer((req, res) => {
  // Different status codes -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  res.statusCode = 200;
  // Response header -> https://developer.mozilla.org/en-US/docs/Glossary/Response_header
  res.setHeader("Content-Type", "text/plain");
  // Writes output and ends the request
  res.end("Request received! Thank you!");
});

// Run the server
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});

// REPL (Read, Eval, Print, Loop) Terminal -> interactive mode of Node.js, by typing `node` in terminal

/*
NPM (Node Package Manager) -> for online repositories of Node.js modules/packages
                           -> command line tool to install packages, version and dependency management

Recommended packages:
- nodemon -> a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- express -> Fast, unopinionated, minimalist web framework for node.
- etc.
*/
