import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async play() {
        let players = await this.inputPlayers();
        const NUMBER = await this.inputNumber();

        Console.print("\n실행결과");
        for (let i = 0; i < NUMBER; i++) {
            players = this.raceController(players);

            Object.keys(players).forEach((key) => {
                Console.print(`${key} : ${"-".repeat(players[key])}`);
            });

            Console.print("");
        }

        Console.print(`최종 우승자 : ${this.outputWinner(players)}`);
    }

    // 플레이어 객체 반환 함수
    async inputPlayers() {
        let players = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
        );
        players = players.split(","); // ['pobi', 'woni', 'jun']

        const TMP_OBJ = players.reduce((accumulator, value) => {
            return { ...accumulator, [value]: 0 };
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
        let tmp = Object.assign({}, players);
        Object.keys(tmp).forEach((key) => {
            if (4 <= Random.pickNumberInRange(0, 9)) tmp[key] += 1;
        });

        return tmp;
    }

    // 우승자 문자열 반환 함수
    outputWinner(players) {
        // 최고기록 저장
        const WINNER_VALUE = Object.values(players).reduce((value1, value2) => {
            return Math.max(value1, value2);
        });
        // 최고기록인 사람 배열로
        const WINNER_ARRAY = Object.keys(players).filter((key) => {
            if (players[key] === WINNER_VALUE) return key;
        });

        return WINNER_ARRAY.join(", ");
    }
}

export default App;
