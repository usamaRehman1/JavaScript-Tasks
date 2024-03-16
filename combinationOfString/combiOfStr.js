// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function combinationsOfString() {
    var data = document.getElementById("value").value;

    (data !== "" && data !== " " && data !== undefined) ? (function () {

        // The regular expression \s matches any whitespace character, and the g flag ensures that all occurrences are replaced.
        let stringWithoutSpaces = data.replace(/\s/g, '');
        // console.log(stringWithoutSpaces)
        var charArray = [];

        // Loop through the characters of the input string and store each character in the array
        for (let x = 0; x < stringWithoutSpaces.length; x++) {
            charArray.push(stringWithoutSpaces.charAt(x));
        }
        // console.log(charArray)

        // Initialize an empty array to store all combinations
        var combination = [];
        var temp = "";

        // Calculate the total number of combinations using the formula 2^n
        var totalNumCombi = Math.pow(2, charArray.length);
        // console.log(totalNumCombi);

        // Generate all combinations using bitwise operations
        for (let i = 0; i < totalNumCombi; i++) {
            temp = "";

            for (let j = 0; j < charArray.length; j++) {
                // Math.pow(base, exponent) performs a bitwise AND operation between the integer i
                if (i & Math.pow(2, j)) {
                    temp += charArray[j];
                }
            }

            if (temp !== "") {
                combination.push(temp)
            }
        }

        // Log the generated combinations, joined by newline, to the console
        console.log(combination);


        // create unorder list 
        var ul = document.getElementById("combiList");

        // set the list data inside the unorder list
        combination.map((value, index) => {
            // console.log(index, value)
            var currli = document.createElement("LI");
            var textNode = document.createTextNode(value);
            currli.setAttribute("key", index);
            currli.appendChild(textNode);
            ul.appendChild(currli);
        })

        console.log(combination.join("\n"));
    })() : console.log("invalid");
}