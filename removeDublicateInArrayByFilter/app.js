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

// remove dublicate by using condition
function remove_dublicate(data) {
    let removeDublicateArr = [];
    let dublicateElementArr = [];
    let flag = false;

    for (let i = 0; i < data.length; i++) {
        var previousElement = data[i];
        flag = false;
        for (let j = i+1; j < data.length; j++) {
            if (data[j] === previousElement) {
                flag = true;
                var dublicate = data[j];
            }
        }

        if (flag) {
            if (dublicateElementArr.length !== 0 ) {
                if (dublicateElementArr.indexOf(dublicate) == -1) {
                    dublicateElementArr.push(dublicate)
                }
            }else{
                dublicateElementArr.push(dublicate);
            }
        }else{
            removeDublicateArr.push(data[i]);
        }
    }

    console.log(removeDublicateArr)
    console.log(dublicateElementArr)
}

remove_dublicate(fruits)