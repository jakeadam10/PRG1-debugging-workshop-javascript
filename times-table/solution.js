

function printTimesTable(n) {
    let i = 0;
    while(i<=n) {
        console.log(`${i} x ${n} = ${i * 5}`);
        i++;
    }
}

printTimesTable(5); // <-- not quite right 
printTimesTable(3); // <-- completely wrong!