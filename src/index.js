
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arr = [];
	let arr2 = [];
	
	if(matrix) {
	    for(let i = 0; i < matrix.length; i++) {
			if(i%2 !== 0) {
				matrix[i] = matrix[i].reverse();
			    arr.push(matrix[i]);
			} else if(i%2 == 0) {
				arr.push(matrix[i]);
			}
			arr2 = [].concat.apply([], arr);
            			
	    }
		
        return arr2;		
	}
    
	return [];
}

