var q = require('q');
var defer = q.defer();

function attachTitle(result){
	return "DR. " + result;
}
defer.promise
.then(attachTitle)
.then(console.log);
defer.resolve("MANHATTAN");
