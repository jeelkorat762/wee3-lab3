// custom-functions.js

// 1.
function cube(num) {
    return num * num * num;
  }
  
  // 2.
  function fullName(first, last) {
    return first + " " + last;
  }
  
  // 3.
  function power(base, exp) {
    if (exp === 0) {
      return 1;
    }
    return base * power(base, exp - 1);
  }
  
  // 4.
  function sumCubes(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + cube(numbers[i]);
    }
    return total;
  }
  
  module.exports = {
    cube: cube,
    fullName: fullName,
    power: power,
    sumCubes: sumCubes
  };