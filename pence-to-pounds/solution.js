function convertFromPenceToPounds(pence) {
  const pounds = (pence / 100).toFixed(2);
  return `£${pounds}`; // Format to two decimal places
}

console.log(convertFromPenceToPounds(0)); // should return "£12.99"
