

function last<T>(items:T[]):T|undefined{
    return items[items.length-1];
}

console.log(last([1,2,3]))
console.log(last(["a","b"]))

export{};