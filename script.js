/*
Part one:
HTTP:
Hypertext Transfer Protocol governs how clients get data from, or send data to, a server.
URL:
Uniform Resource Locator, a URL is an address for some internet resource.
DNS: domain name service
a system that takes human-readable URLs and converts them into IP addresses.
query string:
the query string allows you to pass key-value pairs into the URL

GET: get some data from the server
POST: send some data to the server

HTTP request: from a client to a server which follows the HTTP protocol
HTTP response: from a server to a client which fllows the HTTP protocol

HTTP header: 
Headers provide additional information about the request or the response. Here are some examples:
Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control



Your browser “resolves” the name into an IP address using DNS
Your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)
The server sends a response (typically, HTML, with a status code (200 if it was sucessful)
The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
The browser makes separate HTTP requests for those resources and receives response from the server for each

*/
