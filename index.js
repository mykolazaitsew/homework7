const task1 = (arr) => {
    return arr.reverse();
}


const task2 = (arr1,arr2) => {
    const combo = arr1.concat(arr2);
    const uniqueValues = new Set(combo);
    return Array.from(uniqueValues)
}

console.log(task1([1,2,3,4,5]));
console.log(task2([1, 1, 2, 3], [2, 3, 4, 4]));