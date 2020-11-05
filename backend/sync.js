//var fs = require('fs');
// var filedata = fs.readFileSync('inputfile.txt');

// console.log(filedata.toString());
// console.log("program ended");

// fs.readFile('inputfile.txt', function(err, datasource){
//   if(err) throw err;
//   console.log(datasource.toString());
// });

// console.log('program ended');

var myCallback = function(data) {
  console.log('got data: '+data);
};

var usingItNow = function(callback) {
  callback('get it?');
};
usingItNow(myCallback);