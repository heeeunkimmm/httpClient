var https = require('https');

function getAndPrintHTML (options) {

  https.get(Options, function (response) {
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

var Options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML();