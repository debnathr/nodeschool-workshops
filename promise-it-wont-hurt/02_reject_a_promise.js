// var q = require('q');
// var defer = q.defer();




// function print(err){
// 	console.log(error.message);
// }

// defer.promise.then(null, print);
// setTimeout(defer.reject, 300, "REJECTED!");


var q = require('q');
var def = q.defer();

function printError (err) {
  console.log(err.message); 
}

def.promise.then(null, printError);
setTimeout(def.reject, 300, new Error("REJECTED!"));

