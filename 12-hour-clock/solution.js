function convertTo12Hours(time) {
    const hours = time.slice(0,2);
    const minutes = time.slice(-2);
    if (hours > 12) {
        return `${hours - 12}:${minutes} pm`
    } else {
        return `${hours}:${minutes} am` 
    }
}

// Hint: I recommend calling the function with an input of '12:05'


