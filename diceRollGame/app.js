let player1 = '';
let player2 = '';
let currPlayer = 'a';
let dices = [];
let flag = true;

async function gameStart() {
    const { value: text1 } = await Swal.fire({
        title: "Enter Player 1 Name:",
        input: "text",
    });
    player1 = text1;

    const { value: text2 } = await Swal.fire({
        title: "Enter Player 2 Name:",
        input: "text",
    });
    player2 = text2;

    if (player1.trim() === '' || player2.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Please enter player name",
            text: "Something went wrong!",
        });
    } else {
        document.getElementById("player1").innerHTML = `Player 1: ${player1}`;
        document.getElementById("player2").innerHTML = `Player 2: ${player2}`;

        document.getElementById('startPannel').style.display = 'none';
        document.getElementById('tossPannel').style.display = 'block';
        document.getElementById('gamePannel').style.display = 'none';
        document.getElementById('gameResult').style.display = 'none';
    }
}

function toss() {
    let randomNumToss = Math.random() < 0.5 ? 1 : 2;
    const winner = randomNumToss == 1 ? player1 : player2;

    const tossInterval = setInterval(() => {
        document.querySelector(".tossImg").setAttribute("src", `./assets/dice${Math.random() < 0.5 ? 1 : 2}.png`)
    }, 200)

    setTimeout(() => {
        clearInterval(tossInterval);
        document.querySelector(".tossImg").setAttribute("src", `./assets/dice${randomNumToss}.png`)
        Swal.fire({
            title: `Player ${winner} wins the toss!`,
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        document.getElementById('startPannel').style.display = 'none';
        document.getElementById('tossPannel').style.display = 'none';
        document.getElementById('gamePannel').style.display = 'block';
        document.getElementById('gameResult').style.display = 'none';

        currPlayer = winner;
        document.querySelector(".currPlayer").innerHTML = `${currPlayer}, It's Your Turn`;
    }, 5000)
}


function rollTheDice() {
    let diceRollRandom = Math.ceil(Math.random() * 6);

    if (flag) {
        const firstInterval = setInterval(() => {
            document.querySelector(".dice1").setAttribute("src", `./assets/dice${Math.ceil(Math.random() * 6)}.png`)
        }, 200)

        setTimeout(() => {
            clearInterval(firstInterval);
            document.querySelector(".dice1").setAttribute("src", `./assets/dice${diceRollRandom}.png`);
            dices.push(diceRollRandom);
            document.querySelector(".currPlayer").innerHTML = `${currPlayer == player1 ? player2 : player1}, It's Your Turn`;
        }, 5000)
        flag = false;

    } else {
        const secondInterval = setInterval(() => {
            document.querySelector(".dice2").setAttribute("src", `./assets/dice${Math.ceil(Math.random() * 6)}.png`)
        }, 200)

        setTimeout(() => {
            clearInterval(secondInterval);
            document.querySelector(".dice2").setAttribute("src", `./assets/dice${diceRollRandom}.png`);
            dices.push(diceRollRandom);
            result()
        }, 5000)
    }
}

function result() {
    // console.log(dices)
    document.getElementById('startPannel').style.display = 'none';
    document.getElementById('tossPannel').style.display = 'none';
    document.getElementById('gamePannel').style.display = 'none';
    document.getElementById('gameResult').style.display = 'block';

    document.querySelector(".finalDices1").setAttribute("src", `./assets/dice${dices[0]}.png`);
    document.querySelector(".finalDices2").setAttribute("src", `./assets/dice${dices[1]}.png`);

    if (dices[0] == dices[1]) {
        document.getElementById("result").innerHTML = "Game Draw";
    } else if (dices[0] > dices[1]) {
        document.getElementById("result").innerHTML = `${currPlayer} Wins The Game!`;
    } else if (dices[0] < dices[1]) {
        document.getElementById("result").innerHTML = `${currPlayer == player1 ? player2 : player1} Wins The Game!`;
    }
}