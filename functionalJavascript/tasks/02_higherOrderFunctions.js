function repeat(operation, num) {
	var i = num;
	while (i > 0){
	operation()
	i--
    
    }
}

    // Do not remove the line below
    module.exports = repeat