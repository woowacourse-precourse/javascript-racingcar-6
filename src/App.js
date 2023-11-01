import * as MissionUtils from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.carMoves = {}; // carMoves를 멤버 변수로 선언
    }

    async play() {
        const CARNAME = await this.getCarNames();

        if (!CARNAME) {
            return;
        }

        let COUNT = await this.getAttemptCount();

        if (!COUNT) {
            return;
        }

        MissionUtils.Console.print('실행 결과'); // "실행 결과"를 이동

        let results = '\n'; // 결과 문자열을 초기화
        let maxDistance = 0;
        let winners = [];

        while (COUNT > 0) {
            this.moveAndPrintCars(CARNAME);
            COUNT--;

            if (COUNT > 0) {
                results += "\n"; // 시도 간 구분을 위한 줄 바꿈 추가
            }

            // 가장 멀리 움직인 거리 계산
            for (const carName in this.carMoves) {
                if (this.carMoves[carName].length > maxDistance) {
                    maxDistance = this.carMoves[carName].length;
                }
            }
        }

        for (const carName in this.carMoves) {
            if (this.carMoves[carName].length === maxDistance) {
                winners.push(carName);
            }
        }
        MissionUtils.Console.print(results);
        //MissionUtils.Console.print("\n");
        MissionUtils.Console.print(`최종 우승자: ${winners.join(', ')}`);
    }

    async getCarNames() {
        const CARNAME = [];
        const CARNAMEINPUT = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n');

        if (CARNAMEINPUT) {
            const CARNAMES = CARNAMEINPUT.split(",");

            for (let i = 0; i < CARNAMES.length; i++) {
                const CAR = CARNAMES[i].trim();
                if (CAR.length <= 5) {
                    CARNAME.push(CAR);
                    this.carMoves[CAR] = ""; // 자동차 이름으로 초기화
                } else {
                    throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
                }
            }
        } else {
            throw new Error("[ERROR] 자동차 이름을 입력하세요.");
        }

        return CARNAME;
    }

    async getAttemptCount() {
        const COUNTINPUT = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        if (COUNTINPUT) {
            const count = parseInt(COUNTINPUT);
            if (Number.isNaN(count) || count < 1) {
                throw new Error("[ERROR] 올바른 횟수를 입력하세요.");
            }
            return count;
        } else {
            throw new Error("[ERROR] 시도 횟수를 입력하세요.");
        }
    }

    moveAndPrintCars(CARNAME) {
        for (const carName of CARNAME) {
            const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
            if (randomValue >= 4) {
                this.carMoves[carName] += "-";
            } else {
                this.carMoves[carName] += ""; // 움직이지 않는 경우 공백 추가
            }
        }

        // 결과 출력
        let result = '';
        for (const carName in this.carMoves) {
            result += `${carName} : ${this.carMoves[carName]}\n`;
        }
        result = result.trim(); // 마지막 개행 제거

        MissionUtils.Console.print(result+'\n');
    }
}

export default App;
