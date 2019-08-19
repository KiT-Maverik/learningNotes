    function doubleAll(numbers) {
    	var result = numbers.map(function(num){
    		return num*2;
    		// что за нам? откуда, зачем?
    	});
    	return result;
    }
    module.exports = doubleAll