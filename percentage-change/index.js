
function calculatePercentageDifference(original, newAmount) {
    const difference = Math.abs(newAmount - original);
    const average = (original + newAmount) / 2;
    const percentageDifference = (difference / average) * 100;
    return percentageDifference.toFixed(2);
  }


  