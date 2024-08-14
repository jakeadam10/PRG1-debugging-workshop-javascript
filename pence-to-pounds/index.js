function penceToPounds(pence) {
    const pounds = pence / 100;
    return `£${pounds.toFixed(2)}`; // Format to two decimal places
  }

  console.log(penceToPounds(253))