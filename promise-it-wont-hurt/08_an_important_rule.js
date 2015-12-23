var q = require('q');
var defer = q.defer();

function throwMyGod(err, iterate){
	if (err) {
		console.log("OH NOES");
	};
function iterate(int, result){
	result = (int+1);
	return result;
}
}