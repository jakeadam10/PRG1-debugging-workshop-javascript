function sumDigits(num) {
  numArray = num.toString().split("");
  let sum = 0;
  let counter;
  for (counter = 0; counter < numArray.length; counter++){
      sum += Number(numArray[counter]);
  }
  return sum;
}

console.log(sumDigits(6));
