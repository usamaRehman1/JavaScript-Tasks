window.onload = async () => {
    // get players Name in Swal on window load
    const { value: player1Name } = await Swal.fire({
        title: "First Player Name ",
        input: "text",
        inputLabel: "sign Of First Player O",
        // showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "You need to write something!";
            }
        }
    });

    const { value: player2Name } = await Swal.fire({
        title: "Second Player Name",
        input: "text",
        inputLabel: "sign Of Second Player X",
        inputValidator: (value) => {
            if (!value) {
                return "You need to write something!";
            }
        }
    });
    document.getElementById("players1Name").innerHTML = `Player 1: ${player1Name}`;
    document.getElementById("players2Name").innerHTML = `Player 2: ${player2Name}`;
}
// initialization all variable
let player1 = true, player2 = true, game = false, circleWin, crossWin;
// store all combination of winning the game into combinationOfWon variable
let combinationOfWon = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
]

const clicked = (e) => {

    // check no one win the game this time and go inside the condition
    if (!crossWin && !circleWin) {
        game = true;
        if (player1 && e.classList[1] !== 'circle' && e.classList[1] !== "cross") {
            e.children[0].src = "./assets/circle.png";
            e.children[0].classList.add("boxImg");
            e.classList.add("circle")
            player1 = false;
            player2 = true;
        } else if (player2 && e.classList[1] !== 'circle' && e.classList[1] !== "cross") {
            e.children[0].src = "./assets/cross.png";
            e.children[0].classList.add("boxImg");
            e.classList.add("cross")
            player1 = true;
            player2 = false;
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Already Selected!",
            });
            console.log("Already Selected!")
        }

    }

    // check circle and cross winning criteria
    for (let i = 0; i < combinationOfWon.length; i++) {
        if (document.getElementById(combinationOfWon[i][0]).classList.contains('circle') &&
            document.getElementById(combinationOfWon[i][1]).classList.contains('circle') &&
            document.getElementById(combinationOfWon[i][2]).classList.contains('circle')
        ) {
            circleWin = true;
            game = false;
            Swal.fire("Circle Won The Game!");
            console.log("Circle Won The Game")
        } else if (document.getElementById(combinationOfWon[i][0]).classList.contains('cross') &&
            document.getElementById(combinationOfWon[i][1]).classList.contains('cross') &&
            document.getElementById(combinationOfWon[i][2]).classList.contains('cross')
        ) {
            crossWin = true;
            game = false;
            Swal.fire("Cross Won The Game!");
            console.log("Cross Won The Game!")
        }
    }

    // if the game will draw so run this condition
    if (!circleWin && !crossWin) {
        let allBoxes = document.querySelectorAll(".box"); // get all elemant that have class (box)
        // console.log("list => ", [...allBoxes]) // convet nodeList to simple array

        // every check the each element of the allBoses and give 
        // true => when no one element remain all have classes (circle OR cross)
        // false => when any single element remain to contain classes (circle OR cross)
        let allFilled = [...allBoxes].every(box =>
            box.classList.contains("circle") || box.classList.contains("cross")
        )

        if (allFilled) {
            game = false;
            Swal.fire("Game Draw")
            console.log("Game Draw")
        }
    }
}