import {Console, MissionUtils, Random} from "@woowacourse/mission-utils";

class App {
    async play() {

        const CARS = await this.getCarsName();
        const TRY_CNT = await this.getTryCNT();

        const CARS_GO_CNT = this.printCarGo(CARS, CARS.length, TRY_CNT);
        this.printGameResult(CARS_GO_CNT, CARS);

    }

    async getCarsName() {
        const CAR_NAME_INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const CARS = CAR_NAME_INPUT.split(",");
        try {
            this.checkCarName(CARS);
        } catch (e) {
            throw e;
        }

        return CARS;
    }

    checkCarName(CARS) {
        for (let i = 0; i < CARS.length; i++) {
            if (CARS[i].length > 5) {
                throw new Error("[ERROR] 자동차 이름이 5글자 이상입니다.");
            }
        }
    }

    async getTryCNT() {
        let tryCntInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        try {
            this.checkTryCNT(tryCntInput);
        } catch (e) {
            throw e;
        }
        return Number(tryCntInput);
    }

    checkTryCNT(tryCntInput) {
        if (Number.isInteger(Number(tryCntInput)) === false) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    printCarGo(CARS, CAR_CNT, TRY_CNT) {

        let carGoCNT = Array.from({length: CAR_CNT}, () => 0);

        Console.print("\n실행 결과");

        for (let i = 0; i < TRY_CNT; i++) {
            carGoCNT = this.carGoFromRandom(CAR_CNT, carGoCNT);
            this.printEachGameState(CARS, CAR_CNT, carGoCNT);
            Console.print("");
        }

        return carGoCNT;
    }
    carGoFromRandom(carCNT, carGoCNT) {
        let randomValue;
        for (let j = 0; j < carCNT; j++) {
            randomValue = Random.pickNumberInRange(0, 9);
            if (randomValue >= 4) {
                carGoCNT[j] += 1;
            }
        }
        return carGoCNT;
    }
    printEachGameState(CARS, CAR_CNT, carGoCNT) {
        for (let j = 0; j < CAR_CNT; j++) {
            Console.print(CARS[j] + ' : ' + '-'.repeat(carGoCNT[j]));
        }
    }

    printGameResult(carGoCNT, CARS) {
        const WINNER_VALUE = Math.max.apply(Math, carGoCNT);

        let winnerIndex ;
        let winnerSentence = "최종 우승자 : ";
        let winners = new Array();

        winnerIndex = carGoCNT.indexOf(WINNER_VALUE);

        while (winnerIndex !== -1) {
            carGoCNT[winnerIndex] = -1
            winners.push(winnerIndex);
            winnerIndex = carGoCNT.indexOf(WINNER_VALUE);
        }

        if(winners.length===1){
            winnerSentence = winnerSentence + CARS[winners[0]]
        }
        else if (winners.length > 1) {
            winnerSentence = winnerSentence + winners.map((winner) => CARS[winner]).join(', ');
        }

        Console.print(winnerSentence);
    }


}

export default App;
