// remove dublicate in array by usnig filter method
var fruits = ["apple","mango","banana","lemon","mango","apple","orange"];
console.log(fruits)

function removeDublicate(data) {
    return data.filter((value,index) => data.indexOf(value) === index);
}
console.log(removeDublicate(fruits))

// dublicate element 
function dublicateElement(data) {
    return data.filter((value,index) => data.indexOf(value) !== index);
}
console.log(dublicateElement(fruits))

// remove dublicate by Set constructor
function removedublicatebyset(data) {
    return [...new Set(data)]
}
console.log(removedublicatebyset(fruits))