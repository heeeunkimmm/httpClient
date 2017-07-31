var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    var alldata = '';

    response.on('data', function(data) {
      alldata += data
      // console.log('Chunk Received: ', data, "\n");
    });

    response.on('end', function() {
    console.log(alldata, "Ended GET request.")
    });
  });
}

getAndPrintHTML();