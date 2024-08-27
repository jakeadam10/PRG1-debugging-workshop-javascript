function penceToPounds(pence) {
    const pounds = pence / 100;
    return `£${Math.round(pounds)}`; // Format to two decimal places
  }


penceToPounds(1299) // should return "£12.99"
