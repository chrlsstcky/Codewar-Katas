/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

var moveZeros = function (arr) {
  let zeroCount = 0
  let noneZeros = []
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      zeroCount++
    }else if(arr[i] !== 0){
      noneZeros.push(arr[i]);
    }
  }
  for(var i = 0; i < zeroCount; i++){
    noneZeros.push(0)  
  }
  return noneZeros
}

moveZeros([ 1, 2, 1, 0, 1, 0, 3, 0, 1 ])

