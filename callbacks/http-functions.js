
module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function (response) {
    response.setEncoding('utf8');
    var alldata = '';

    response.on('data', function (data) {
      alldata += data;
      // console.log('Chunk Received: ', data, "\n");
    });

    response.on('end', function () {
      callback(alldata);
    // console.log(alldata, "Ended GET request.")
    });
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// getHTML(requestOptions, printHTML);