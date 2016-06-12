
function sym(args) {
  
  // create nested array from args (called arr)
  var myArray = arguments;
  var arr = [];
  for (var i = 0; i < myArray.length; i++){
    arr.push(myArray[i]);
  }
    
   
  // if symmetric difference, returns value; else, continue 
  function ifSym(num, arrOne, arrTwo){
    if (arrOne.indexOf(num) !== -1 && arrTwo.indexOf(num) === -1){
      return true;
    } else if (arrOne.indexOf(num) === -1 && arrTwo.indexOf(num) !== -1){
      return true;
    } else {
      return false;
    }
  }
  
  // takes in two arrays, walks through each value of each in turn
  function testSymmetric(arrOne, arrTwo){ 
    var newArray = [];
    for (var b = 0; b < 2; b++){
      for (var c = 0; c < arguments[b].length; c++){
        if (ifSym(arguments[b][c], arrOne, arrTwo)){
          newArray.push(arguments[b][c]);
        }
      }
    }
    var resultArray = newArray.filter(function(item, pos) {
    return newArray.indexOf(item) == pos;
    });
    return resultArray;
  }
// once there is only one array, testSymmetric indexOf area breaks down; bug confirmed, changing for loop from "length" to "length - 1" fixed bug;
  
  
  // All arrays enter... one array leaves! It's the Array Thunderdome!!!
  var length = arr.length;
  var syms = testSymmetric(arr[0], arr[1]);
  
  for (var b = 0; b < length - 1; b++){
    syms = testSymmetric(arr[0], arr[1]);
    arr.shift();
    arr.shift(); 
    arr.unshift(syms);
  } 

  var merged = [].concat.apply([], arr);
  return merged;
  }


sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
