import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async play() {
        let players = await this.inputPlayers();
        const NUMBER = await this.inputNumber();

        for (let i = 0; i < NUMBER; i++) {
            this.race(players);
        }
    }

    // 플레이어 객체 반환 함수
    async inputPlayers() {
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
    async inputNumber() {
        const NUMBER = await Console.readLineAsync(
            "시도할 횟수는 몇 회인가요?"
        );
        return Number(NUMBER);
    }

    // 경기 진행 함수
    raceController(players) {
        Object.keys(players).forEach((value) => {
            if (4 <= Random.pickNumberInRange(0, 9)) players[value] += "-";
        });
        return;
    }
}

export default App;
