import { Random, Console } from "@woowacourse/mission-utils";
class App {
    async play() {
        Console.print(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
        );

        const carNameArr = await this.createCarNameArr();
        Console.print(carNameArr.join(","));

        Console.print("시도할 횟수는 몇 회인가요?");

        const numberOfGames = await this.getNumberOfGames();
        Console.print(numberOfGames);

        Console.print("실행 결과");

        const numberOfCars = carNameArr.length;
        const carStates = Array(numberOfCars).fill("");
        let round = 1;
        while (round <= numberOfGames) {
            this.calculateAndStoreScore(carStates);
            const roundResult = this.createRoundResult(carNameArr, carStates);
            Console.print(roundResult);
            round++;
        }
        const winnerIndexList = this.determineWinnerIndex(carStates);
        const winners = this.determineWinners(winnerIndexList, carNameArr);
        Console.print(`최종 우승자 : ${winners}`);
    }

    async createCarNameArr() {
        const inputValue = await Console.readLineAsync().then((value) => value);
        const carNameArr = inputValue.split(",");
        this.checkCarFormat(inputValue, carNameArr);

        return carNameArr;
    }

    async getNumberOfGames() {
        const numberOfGames = await Console.readLineAsync().then(
            (value) => value / 1 //문자형 숫자형으로 변환
        );
        this.checkNumberOfGamesFormat(numberOfGames);

        return numberOfGames;
    }

    checkCarFormat(input, inputArr) {
        if (!input || !input.includes(",") || inputArr.includes("")) {
            throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
        }

        const isCarNameUnderFiveChars = inputArr.every((el) => el.length <= 5);
        if (!isCarNameUnderFiveChars) {
            throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
        }
    }

    checkNumberOfGamesFormat(numberOfGames) {
        if (numberOfGames === 0 || isNaN(numberOfGames)) {
            throw new Error("[ERROR] 시도 횟수가 잘못된 형식입니다.");
        }
    }

    calculateAndStoreScore(carStates) {
        for (let i = 0; i < carStates.length; i++) {
            let randomNumber = Random.pickNumberInRange(0, 9);
            if (randomNumber >= 4) {
                carStates[i] += "-";
            }
        }
        return carStates;
    }

    createRoundResult(carNameArr, carStates) {
        const roundResultArr = [];
        for (let i = 0; i < carNameArr.length; i++) {
            const result = `${carNameArr[i]} : ${carStates[i]}`;
            roundResultArr.push(result);
        }
        const roundResult = roundResultArr.join("\n");
        return roundResult;
    }

    determineWinnerIndex(carStates) {
        const winnerIndexList = [];

        const maxValue = carStates.reduce((temporaryMaxValue, cur) =>
            temporaryMaxValue.length > cur.length ? temporaryMaxValue : cur
        );

        carStates.forEach((el, idx) => {
            if (el === maxValue) {
                winnerIndexList.push(idx);
            }
        });
        return winnerIndexList;
    }

    determineWinners(winnerIndexList, carNameArr) {
        const winnersArr = winnerIndexList.map((el) => carNameArr[el]);
        const winners = winnersArr.join(", ");
        return winners;
    }
}

export default App;
