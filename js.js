class GameXO {
    constructor(name) {
        this.name = name;
    }
    
    startGame() {
        //создаем таблицу
        let mainDocument = document.querySelector("main");
        let divGame = document.createElement("div");
        divGame.className = "container";
        mainDocument.appendChild(divGame);
        let tableGame = document.createElement("table");
        divGame.appendChild(tableGame);
        for (let i = 0; i < 3; i++) {
            let trGame = document.createElement("tr");
            for (let i = 0; i < 3; i++) {
                let tdGame = document.createElement("td");
                trGame.appendChild(tdGame);
            }
            tableGame.appendChild(trGame);
        }

        // coздаем объявление
        let noticeGame = document.createElement("div");
        noticeGame.className = "notice";
        divGame.appendChild(noticeGame);
        let winnerGame = document.createElement("span");
        winnerGame.className = "winner";
        noticeGame.appendChild(winnerGame);

        // ставим Х
        let tdArr = tableGame.querySelectorAll("td");

        function startGameXO() {
            for (let i = 0; i < tdArr.length; i++) {
                tdArr[i].onclick = function () {
                    if (tdArr[i].innerHTML === "") {
                        tdArr[i].innerHTML = "X";
                        openNotice("X");
                        for (let j = 0; j < tdArr.length; j++) {
                            if (tdArr[j].innerHTML === "") {
                                zeroInTd();
                                openNotice("O");
                                break;
                            }
                        }
                    }
                }
            }
        }

        let gameStopOrStart = startGameXO();

        function stopGame() {
            for (let i = 0; i < tdArr.length; i++) {
                if (tdArr[i].innerHTML === "") {
                    tdArr[i].innerHTML = "  ";
                }
            }
        }

        // ставим O
        function zeroInTd() {
            let i = Math.floor(Math.random() * (9 - 0) + 0);
            if (tdArr[i].innerHTML !== "") {
                zeroInTd();
            } else {
                return tdArr[i].innerHTML = "O";
            }
        }

        // счет 
        let countingX = document.querySelector(".countingX");
        let countingO = document.querySelector(".countingO");
        function countingGame(xo) {
            if (xo == "X") {
                countingX.innerHTML = parseInt(countingX.innerHTML) + 1;
            } else if (xo == "O") {
                countingO.innerHTML = parseInt(countingO.innerHTML) + 1;
            }
        }

        // условия выиграша
        function win(xo) {
            if (tdArr[0].innerHTML === xo && tdArr[1].innerHTML === xo && tdArr[2].innerHTML === xo ||
                tdArr[3].innerHTML === xo && tdArr[4].innerHTML === xo && tdArr[5].innerHTML === xo ||
                tdArr[6].innerHTML === xo && tdArr[7].innerHTML === xo && tdArr[8].innerHTML === xo ||
                tdArr[0].innerHTML === xo && tdArr[3].innerHTML === xo && tdArr[6].innerHTML === xo ||
                tdArr[1].innerHTML === xo && tdArr[4].innerHTML === xo && tdArr[7].innerHTML === xo ||
                tdArr[2].innerHTML === xo && tdArr[5].innerHTML === xo && tdArr[8].innerHTML === xo ||
                tdArr[0].innerHTML === xo && tdArr[4].innerHTML === xo && tdArr[8].innerHTML === xo ||
                tdArr[2].innerHTML === xo && tdArr[4].innerHTML === xo && tdArr[6].innerHTML === xo) {
                if (xo == "X") {
                    winnerGame.innerHTML = "Крестики выиграли!";
                    countingGame("X");
                } else if (xo == "O") {
                    winnerGame.innerHTML = "Нолики выиграли!";
                    countingGame("O");
                }
                noticeGame.style.display = "block";
                gameStopOrStart = stopGame();
                return "end game";
            }
        }

        // вывод табло
        function openNotice(xo) {
            let arrEndGame = [];
            let game = win(xo);
            for (let i = 0; i < tdArr.length; i++) {
                if (tdArr[i].innerHTML !== "") {
                    arrEndGame.push(tdArr[i]);
                }
            }
            if (arrEndGame.length === 9 && game !== "end game") {
                winnerGame.innerHTML = "Ничья!";
                noticeGame.style.display = "block";
            }
            return game;
        }

        // кнопка выхода от сюдова
        let btnCloseGame = document.querySelector(".close_btn");
        let containerBtn = document.querySelector(".container_btn");
        containerBtn.appendChild(btnCloseGame);

        btnCloseGame.onclick = function () {
            close();
        }

        // кнопка новой игры
        let btnNewGame = document.querySelector(".open_new_game_btn");
        containerBtn.appendChild(btnNewGame);

        let tdArrAll = document.querySelectorAll("td");
        btnNewGame.onclick = function () {
            for (let i = 0; i < tdArrAll.length; i++) {
                tdArrAll[i].innerHTML = "";
            }
            let noticeGameAll = document.querySelectorAll(".notice");
            for (let i = 0; i < noticeGameAll.length; i++) {
                noticeGameAll[i].style.display = "none";
            }
        }
    }
}

let game1 = new GameXO("lol");
game1.startGame();

let game2 = new GameXO("lal");
game2.startGame();

let game3 = new GameXO("lil");
game3.startGame();
