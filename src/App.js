// App.js

import { Console, Random } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.nameList = [];
        this.tries = 0;
        this.winner = [];
    }

    async play() {
        await this.setCarName();
        await this.setTries();
        this.moveCar();
        this.showWinner();
    }

    async setCarName() {
        const carNameList = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
        );
        this.nameList = carNameList.split(",");
        for (let i = 0; i < this.nameList.length; i++) {
            if (this.nameList[i].length >= 6) {
                throw Error("[ERROR] 차의 이름은 5글자 이하여야 합니다. ");
            }
        }
    }

    async setTries() {
        let tempTries = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        if (!isNaN(tempTries)) {
            this.tries = tempTries;
        } else throw Error("[ERROR] 숫자만 입력해주세요.");
    }

    moveCar() {
        let moveArray = new Array(this.nameList.length).fill(0); // tempMove 값을 저장할 배열
        let printArray = new Array(this.nameList.length).fill(0); // "-" 출력 개수 저장할 배열
        let tempMove;
        let moveTries = 0;
        Console.print("실행결과");

        while (this.tries > moveTries) {
            for (let i = 0; i < this.nameList.length; i++) {
                tempMove = Random.pickNumberInRange(0, 9);
                tempMove = tempMove < 4 ? 0 : 1;
                moveArray[i] = tempMove;
            }

            let movement;

            for (let i = 0; i < this.nameList.length; i++) {
                movement = moveArray[i];
                printArray[i] += movement;

                let progress = "-".repeat(printArray[i]);

                Console.print(
                    i == this.nameList.length - 1
                        ? `${this.nameList[i]} : ${progress} \n`
                        : `${this.nameList[i]} : ${progress}`
                );
            }

            moveTries += 1;
        }

        let winnerNumber = Math.max(...printArray);
        this.winner = [];

        for (let i = 0; i < printArray.length; i++) {
            if (printArray[i] === winnerNumber) {
                this.winner.push(i);
            }
        }
    }

    showWinner() {
        let winnerMessage = "최종 우승자 : ";
        for (let i = 0; i < this.winner.length; i++) {
            winnerMessage += `${this.nameList[this.winner[i]]}, `;
        }
        winnerMessage = winnerMessage.slice(0, -2); // 마지막 ", " 제거
        Console.print(winnerMessage);
    }
}

export default App;
