
// checking subset array
function isSubset(arr, anotherArr) {
    // Use the filter method to check if each element in 'arr' is present in 'anotherArr'
    const subset = arr.filter(item => anotherArr.includes(item));
    
    // If the length of the filtered array is equal to the length of 'arr', then 'arr' is a subset
    return subset.length === arr.length;
}

// Example usage:
const arr = [9, 2, 3];
const anotherArr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

if (isSubset(arr, anotherArr)) {
    console.log("arr is a subset of anotherArr");
} else {
    console.log("arr is not a subset of anotherArr");
}
