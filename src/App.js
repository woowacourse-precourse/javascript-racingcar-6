import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async play() {
        const PLAYERS = await this.getPlayer();
        const NUMBER = await this.getNumber();

        this.result(PLAYERS);
        console.log(PLAYERS);
    }

    // 플레이어 객체 반환 함수
    async getPlayer() {
        let players = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
        );
        players = players.split(","); // ['pobi', 'woni', 'jun']

        const TMP_OBJ = players.reduce((accumulator, value) => {
            return { ...accumulator, [value]: "" };
        }, {});

        return TMP_OBJ;
    }

    // 반복 횟수 반환 함수
    async getNumber() {
        const NUMBER = await Console.readLineAsync(
            "시도할 횟수는 몇 회인가요?"
        );
        return Number(NUMBER);
    }
}

export default App;
