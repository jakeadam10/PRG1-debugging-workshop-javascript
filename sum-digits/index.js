function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
    console.log(num);
      sum += num % 10;
      num--;
    }
    return sum;
  }

console.log(sumDigits(12));