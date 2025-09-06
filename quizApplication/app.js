let quizQue = [
    {
        question: "What is capital of Pakistan ?",
        options: ["karachi", "lahore", "peshawer", "islamabad"],
        answer: "islamabad",
    },
    {
        question: "What is 2+2 ?",
        options: [4, 5, 6, 7],
        answer: 4,
    },
    {
        question: "who is the president of Pakistan ?",
        options: ["imran khan", "zardari ", "mamnon hussan", "arif alvi"],
        answer: "arif alvi",
    },
    {
        question: "what is 6/2?",
        options: [3, 4, 3.2, 3.4],
        answer: 3,
    },
    {
        question: "who is the president of America?",
        options: ["imran khan", "donald trump", "queen elzabeth", "arif alvi"],
        answer: "donald trump",
    },
    {
        question: "What is the total area of Punjab Province?",
        options: ["74,521 Km", "347,190 Sq Km", "205,344 Sq Km", "455,344 Sq Km"],
        answer: "205,344 Sq Km",
    },
    {
        question: "Who is the current Test Captain of Pakistani Team",
        options: ["Babar Azam", "Sarfaraz Ahmed", "Muhammad Rizwan", "Salman Ali Agha"],
        answer: "Babar Azam",
    },
    {
        question: "How many provinces Pakistan have",
        options: ["6", "5", "4", "3"],
        answer: "5",
    },
    {
        question: "Who was the founder of Daily English Newspaper Dawn?",
        options: ["Liaquat Ali Khan", "Quaid-e-Azam", "Allama Iqbal", "None of Them"],
        answer: "Quaid-e-Azam",
    },
    {
        question: "Who is the current Prime Minister of Pakistan",
        options: ["Shahbaz Sharif", "Imran Khan", "Sarfaraz Ahmed", "Nawaz Sharif"],
        answer: "Shahbaz Sharif",
    },
    {
        question: "The 1962 Constitution of Pakistan was passed during the regime of?",
        options: ["Ayoub Khan", "Sikandar Mirza", "Muhammad Amir", "Nawaz Sharif"],
        answer: "Ayoub Khan",
    },
    {
        question: "The third largest city of Pakistan is",
        options: ["Karachi", "faisalabad", "sukkur", "Rahim Yar Khan"],
        answer: "faisalabad",
    },
    {
        question: "Who was the hero of Pak India 1965 war?",
        options: ["Major Raja Aziz Bhatti", "Aamir Liaquat", "Humayun Saeed", "Imran Khan"],
        answer: "Major Raja Aziz Bhatti",
    },
    {
        question: "National code of Pakistan is?",
        options: ["PAK", "PK", "Pakisan", "None of them"],
        answer: "PK",
    },
    {
        question: "Defence day is observed on ___________ ?",
        options: ["14 Feb", "14 August", "6 September", "25 December"],
        answer: "6 September",
    },
];

let quizStartModule = document.getElementById("start_container");
let quizQuestionModule = document.getElementById("question_continer");
let quizResultModule = document.getElementById("result_container");

let score = 0, queCounter = 0, attemptQue = 0, millisecond = 0, second = 0, minutes = 0;
let displayMilliSec = "", displaySec = "", displayMin = "", interval;

function startQuiz() {
    if (queCounter !== 0) {
        millisecond = 0, second = 0, minutes = 0, score = 0, queCounter = 0, attemptQue = 0;
    }
    quizStartModule.style.display = "none";
    quizQuestionModule.style.display = "block";
    quizResultModule.style.display = "none";
    nextQuestion()
}

function nextQuestion() {
    scoreCounter(queCounter)
    showQuestion(queCounter);
    activeClass(queCounter);
    ++queCounter;
}

function showQuestion(queCounter) {
    interval = setInterval(timer, 1)

    if (queCounter < quizQue.length) {
        document.getElementById("queCounter").innerText = `Question No. ${queCounter + 1} to ${quizQue.length}`;
        document.getElementById("que").innerText = `${(queCounter + 1 < 10) ? `0${queCounter + 1}` : queCounter + 1}: ${quizQue[queCounter]["question"]}`;
        let ul = document.getElementById("optionUl");
        ul.innerHTML = `<li class="my-4 d-flex justify-content-center align-items-center">${quizQue[queCounter]["options"][0]}</li>
        <li class="my-4 d-flex justify-content-center align-items-center">${quizQue[queCounter]["options"][1]}</li>
        <li class="my-4 d-flex justify-content-center align-items-center">${quizQue[queCounter]["options"][2]}</li>
        <li class="my-4 d-flex justify-content-center align-items-center">${quizQue[queCounter]["options"][3]}</li>`
    } else {
        quizStartModule.style.display = "none";
        quizQuestionModule.style.display = "none";
        quizResultModule.style.display = "block";

        let totalQue = document.querySelector(".total-question").innerHTML = quizQue.length;
        let attempQue = document.querySelector(".attempt-question").innerHTML = attemptQue;
        let totalCorrect = document.querySelector(".total-correct").innerHTML = score;
        let totalWrong = document.querySelector(".total-wrong").innerHTML = quizQue.length - score;
        let per = document.querySelector(".percentage").innerHTML = `${((score / quizQue.length) * 100).toFixed(2)}%`;
        let attemptDiv = document.querySelector(".attemptDiv").innerHTML = `${score}/${quizQue.length}`;
        millisecond = 0, second = 0, minutes = 0, score = 0, queCounter = 0, attemptQue = 0;
    }
}

function activeClass(queCounter) {
    let options = document.querySelectorAll("#optionUl li");

    for (let i = 0; i < options.length; i++) {
        options[i].onclick = () => {

            for (let j = 0; j < options.length; j++) {
                if (options[j].classList.contains("selected")) {
                    options[j].classList.remove("selected")
                }
            }
            options[i].classList.add("selected");
        }

    }
}

function scoreCounter(queCounter) {
    let options = document.querySelectorAll("#optionUl li");

    for (let i = 0; i < options.length; i++) {
        if (options[i].classList.contains("selected")) {
            attemptQue++;
            if (options[i].childNodes[0].nodeValue.toString() == quizQue[queCounter - 1]["answer"].toString()) {
                // console.log("correct Ans=>", options[i].childNodes[0].nodeValue)
                ++score;
            }
        }
    }
}

function timer() {
    millisecond++;
    if (millisecond / 1000 == 1) {
        millisecond = 0;
        second++;
        if (second / 60 == 1) {
            second = 0;
            minutes++;
        }
    }
    if (minutes <= 5) {
        document.getElementById("clock").innerText = `${(minutes < 10) ? `0${minutes}` : minutes} : ${(second < 10) ? `0${second}` : second}`
    } else {
        clearInterval(interval)
        quizStartModule.style.display = "none";
        quizQuestionModule.style.display = "none";
        quizResultModule.style.display = "block";

        let totalQue = document.querySelector(".total-question").innerHTML = quizQue.length;
        let attempQue = document.querySelector(".attempt-question").innerHTML = attemptQue;
        let totalCorrect = document.querySelector(".total-correct").innerHTML = score;
        let totalWrong = document.querySelector(".total-wrong").innerHTML = quizQue.length - score;
        let per = document.querySelector(".percentage").innerHTML = (score / quizQue.length) * 100 + "%";
        let attemptDiv = document.querySelector(".attemptDiv").innerHTML = score + "/" + quizQue.length;
        millisecond = 0, second = 0, minutes = 0, score = 0, queCounter = 0, attemptQue = 0;
    }
}

function home() {
    clearInterval(interval)
    quizStartModule.style.display = "block";
    quizQuestionModule.style.display = "none";
    quizResultModule.style.display = "none";
    millisecond = 0, second = 0, minutes = 0, score = 0, queCounter = 0, attemptQue = 0;
}