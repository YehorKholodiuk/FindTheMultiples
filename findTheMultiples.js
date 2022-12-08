function findMultiples(integer, limit) {
    //your code here
    let res = [];
    for (let i = integer; i <= limit; i+= integer) {
        res.push(i)
    }
    return res;
}
console.log(findMultiples(4,27))
