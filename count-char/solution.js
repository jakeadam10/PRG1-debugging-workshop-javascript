function countChar(string, target) {
    let i = 0;
    let count = 0;
    do {
        if (string[i] = target) {
            count++
            i++
        }
    } while (i < target.length)
        return count;
}

console.log(countChar('aaaabbbcc','b')); // <-- should return 3