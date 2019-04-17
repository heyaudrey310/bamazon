# json-http

A simple wrapper for making an http get request to a JSON endpoint in Node.js. Includes the ability to set a timeout.

``` js
var jsonHttp = require('json-http');

jsonHttp.getJson('http://localhost/api', function(err, response) {
	console.log(response);      
});
```

## Using Timeout

``` js
var jsonHttp = require('json-http');
var timeoutInMilliSeconds = 2000;

jsonHttp.getJson('http://localhost/api', timeoutInMilliSeconds, function(err, response) {
	console.log(response);      
});
```