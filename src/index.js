
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

/*module.exports = function towelSort (matrix) {
  var arr = [];
  if(matrix)
    for(var i = 0; i<matrix.length; i++){
      getValArr(matrix[i],arr,i%2==1);
    }
  return arr;
}

function getValArr(matrixSub,arr,isRevers){
  if(!isRevers){
    for(var i = 0; i<matrixSub.length; i++){
      arr.push(matrixSub[i]);
    }
  }else{
    for(var i = matrixSub.length-1; i>=0; i--){
      arr.push(matrixSub[i]);
    }
  }
}*/
