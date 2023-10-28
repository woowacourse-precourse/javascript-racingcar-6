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
        const carNameArr = await Console.readLineAsync().then((value) =>
            value.split(",")
        );
        return carNameArr;
    }
    async getNumberOfGames() {
        const numberOfGames = await Console.readLineAsync().then(
            (value) => value / 1 //문자형 숫자형으로 변환
        );

        return numberOfGames;
    }
}

export default App;
