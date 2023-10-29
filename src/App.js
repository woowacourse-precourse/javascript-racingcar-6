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

        return numberOfGames;
    }
    checkCarFormat(input, inputArr) {
        if (!input || !input.includes(",")) {
            throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
        }

        const iscarNameUnderFiveChars = inputArr.every((el) => el.length <= 5);
        if (!iscarNameUnderFiveChars) {
            throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
        }
    }
}

export default App;
