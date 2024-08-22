function convertTo12Hours(time) {
    const hours = time.slice(0,2);
    const minutes = time.slice(-2);
    if (hours > 12) {
        return `${hours - 12}:${minutes} pm`
    } else {
        return `${hours}:${minutes} am` 
    }
}

console.log(convertTo12Hours('12:05')); // <- not quite right!


