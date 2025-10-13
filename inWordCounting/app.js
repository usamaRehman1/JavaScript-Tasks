// -------------------------------- In Word Counting -------------------------

const inWordCounting = (arr, obj) => {

    if (!Number(arr.join(""))) {
        if (arr[0] == 0) return "zero"
        return "Please Enter a vlid input"
    }

    const doubleLen = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }

    // 10 ten
    // 100 hundred
    // 1000 thousand
    // 10000 ten thousand
    // 100000 one Lac

    let result = ""
    let hundred = "hundred"

    switch (arr.length) {
        case 1:
            return obj[arr[0]]
        case 2:
            return (obj.hasOwnProperty(arr.join(""))) ? obj[arr.join("")] : `${doubleLen[arr[0]]} ${obj[arr[1]]}`;
        case 3:
            return `${obj[arr[0]]} hundred ${(doubleLen[arr[1]]) ? doubleLen[arr[1]] : ""} ${(obj[arr[2]]) ? obj[arr[2]] : ""}`;
        case 4:
            if (arr[1] == 0) {
                hundred = ""
            }
            return `${obj[arr[0]]} thousand ${(doubleLen[arr[1]]) ? doubleLen[arr[1]] : ""} ${hundred} ${(obj[arr[2]]) ? obj[arr[2]] : ""} ${(obj[arr[3]]) ? obj[arr[3]] : ""}`;
        case 5:
            if (arr[2] == 0) {
                hundred = ""
            }

            if (obj.hasOwnProperty(`${arr[0]}${arr[1]}`)) {
                result = `${obj[`${arr[0]}${arr[1]}`]} thousand ${(obj[arr[2]]) ? obj[arr[2]] : ""} ${hundred} ${(doubleLen[arr[3]]) ? doubleLen[arr[3]] : ""} ${(obj[arr[4]]) ? obj[arr[4]] : ""}`
            } else {

                result = `${doubleLen[arr[0]]} ${obj[arr[1]]} thousand ${(obj[arr[2]]) ? obj[arr[2]] : ""} ${hundred} ${(doubleLen[arr[3]]) ? doubleLen[arr[3]] : ""} ${(obj[arr[4]]) ? obj[arr[4]] : ""}`
            }

            return result
        default:
            return "Your number is out of range"
    }
}


const arrayProcess = (cb, numArr) => {

    const numberWords = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let check = cb(numArr, numberWords)
    return check.trim()
}

const processButton = document.getElementById("processButton");

processButton.addEventListener("click", (e) => {
    e.preventDefault();
    const numInput = +document.getElementById("textInput").value;
    const numToWord = arrayProcess(inWordCounting, numInput.toString().split(""))
    document.getElementById("numberWordsDisplay").innerText = `${numToWord}`
    document.getElementById("textInput").value = ''
})