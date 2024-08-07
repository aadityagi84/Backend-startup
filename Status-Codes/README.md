<h1> HTTP Status  Code </h1>
<p>HTTP status codes are three-digit numbers returned by a web server in response to a client's request. They indicate whether a request was successful, if there was an error, or if further action is needed. Here’s a breakdown of the major categories:
</p>
<h2>
1xx: Informational</h2>
100 Continue: The initial part of the request has been received, and the client should continue with the request.<br>
101 Switching Protocols: The server is switching protocols as requested by the client.<br>
<br>
<h2>
2xx: Success</h2>
200 OK: The request was successful, and the server returned the requested data.<br>
201 Created: The request was successful, and a new resource was created as a result.<br>
204 No Content: The request was successful, but there is no content to send back.<br>
<br>
<h2>
3xx: Redirection</h2>
301 Moved Permanently: The resource has been permanently moved to a new URL.<br>
302 Found: The resource is temporarily located at a different URL, but the original URL should be used for future requests.<br>
304 Not Modified: The resource has not been modified since the last request, so the client can use the cached version.<br>
<br>
<h2>
4xx: Client Error</h2>
400 Bad Request: The server could not understand the request due to invalid syntax.<br>
401 Unauthorized: The request requires user authentication.<br>
403 Forbidden: The server understood the request but refuses to authorize it.<br>
404 Not Found: The server cannot find the requested resource.<br>
405 Method Not Allowed: The method specified in the request is not allowed for the resource.<br>
<br>
<h2>
5xx: Server Error</h2>
500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.<br>
502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.<br>
503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.<br>
