var request = require('request');
var fs = require('fs');

// Create a writable stream
var writerStream = fs.createWriteStream('./future.jpg');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Message:',response.statusMessage);
         console.log('Response Content Type:',response.headers['content-type']);
       })
       .pipe(writerStream)

writerStream.on('finish', function() {
   console.log("Download completed.");
});
