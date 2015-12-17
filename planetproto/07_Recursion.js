function reduce(arr, fn, initial){
	return(function fn(index,value){
		if (index > arr.length -1)return value
		return fn(index+1, function(prev,current, index, arr)
		})(0, initial)
	}

module.exports = reduce

