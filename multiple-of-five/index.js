function getLastDigit(num) {
    return num.toString()[num.length];
}

function isMultipleOfFive(n) {
    console.log(getLastDigit(n))
    if (getLastDigit(n) === 5 || getLastDigit(n) === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isMultipleOfFive(6));
console.log(isMultipleOfFive(5));
