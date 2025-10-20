// ---------------------------------- Random color changer by hex code -------------------------------

let colorCode = '#';
const hexCodeGenerator = (arr) => {
    function randomGenerator() {
        colorCode += arr[Math.floor(Math.random() * arr.length)]
    }

    for (let i = 0; i < 6; i++) {
        if (colorCode.length < 7) randomGenerator();
    }
    return colorCode
}

const handleColorChange = () => {

    const hexCodeArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    const hexCode = hexCodeGenerator(hexCodeArr);
    document.getElementById("coloCode").textContent = `${hexCode}`;
    document.body.style.backgroundColor = `${hexCode}`
    colorCode = '#'

}

// ---------------------------------- Random color changer by RGB code -------------------------------

// const handleColorChange = () => {
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255)
//     const blue = Math.floor(Math.random() * 255)
//     document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
//     document.getElementById("coloCode").textContent = `rgb(${red},${green},${blue})`;
// }

