import { Random, Console } from "@woowacourse/mission-utils";
class App {
    async play() {
        Console.print(
            "경주할 자동차 이름을 입력하세요.(이름은 5자 이하로 쉼표(,)를 기준으로 구분해주세요.)"
        );

        const carNameArr = await this.createCarNameArr();
        console.log(carNameArr);

        Console.print("시도할 횟수는 몇 회인가요?");

        const numberOfGames = await this.getNumberOfGames();
        console.log(numberOfGames);

        const numberOfCars = carNameArr.length;

        const carStates = Array(numberOfCars).fill("");
        let round = 1;
        while (round <= numberOfGames) {
            this.calculateAndStoreScore(carStates);
            const roundResult = this.createRoundResult(carNameArr, carStates);
            Console.print(roundResult);
            round++;
        }
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

    determineWinner(carStates) {
        if (carStates.length === 1) {
            return [0];
        }
        let winnerList = [];
        let comparison = carStates[0].length;
        for (let i = 1; i < carStates.length; i++) {
            if (carStates[i].length > comparison) {
                comparison = carStates[i].length;
                winnerList = [];
                winnerList.push(i);
            } else if (carStates[i].length === comparison) {
                winnerList.push(i);
            }
        }
        return winnerList;
    }
}

export default App;
