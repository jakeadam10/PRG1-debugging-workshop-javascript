function calculatePercentageDifference(original, newAmount) {
  const percentageDifference = (newAmount / original) * 100 - 100;
  return Math.round(percentageDifference);
}

console.log(calculatePercentageDifference(100, 50) + '% change!'); // should return -20 as there's been a 20% decrease from 50 to 40
