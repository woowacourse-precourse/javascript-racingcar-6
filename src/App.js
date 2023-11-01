import {Console, MissionUtils, Random} from "@woowacourse/mission-utils";

class App {
    async play() {

        const CARS = await this.getCarsName();
        const TRY_CNT = await this.getTryCNT();

        const CARS_GO_CNT = this.getPlayResult(CARS, CARS.length, TRY_CNT);

        this.printGameResult(CARS_GO_CNT, CARS);

    }

    async getCarsName() {
        let carNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        let carNameTemp = carNameInput.replace(/ /g, '');
        const CARS = carNameTemp.split(",");
        try {
            this.checkCarName(CARS);
        } catch (e) {
            throw e;
        }

        return CARS;
    }

    checkCarName(CARS) {

        //중복된 이름 예외처리하기
        const SETCars= new Set(CARS);
        if(CARS.length !==  SETCars.length){
            throw new Error("[ERROR] 중복되는 자동차 이름이 존재합니다.");
        }

        for (let i = 0; i < CARS.length; i++) {
            if (CARS[i].length > 5) {
                throw new Error("[ERROR] 자동차 이름이 5글자 이상입니다.");
            }
        }

    }

    async getTryCNT() {
        let tryCNTInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        try {
            this.checkTryCNT(tryCNTInput);
        } catch (e) {
            throw e;
        }
        //정수로 반환
        return Number(tryCNTInput);
    }

    checkTryCNT(tryCntInput) {
        if (Number.isInteger(Number(tryCntInput)) === false) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    getPlayResult(CARS, CAR_CNT, TRY_CNT) {
        //게임 실행하는 메소드
        let carGoCNT = Array.from({length: CAR_CNT}, () => 0);

        Console.print("\n실행 결과");

        for (let i = 0; i < TRY_CNT; i++) {
            //각 회당 자동차들의 랜덤값에 따라 직진-정지 값 구해서 다시 배열에 저장
            carGoCNT = this.carGoFromRandom(CAR_CNT, carGoCNT);
            //play한 결과 출력
            this.printEachGameState(CARS, carGoCNT);
            Console.print("");
        }

        return carGoCNT;
    }

    carGoFromRandom(CAR_CNT, carGoCNT) {
        let randomValue;
        for (let j = 0; j < CAR_CNT; j++) {
            randomValue = Random.pickNumberInRange(0, 9);
            if (randomValue >= 4) {
                carGoCNT[j] += 1;
            }
        }
        return carGoCNT;
    }

    printEachGameState(CARS, carGoCNT) {
        for (let j = 0; j < CARS.length; j++) {
            Console.print(CARS[j] + ' : ' + '-'.repeat(carGoCNT[j]));
        }
    }

    printGameResult(carGoCNT, CARS) {
        const WINNER_VALUE = Math.max.apply(Math, carGoCNT);

        let winnerIndex;
        let winnerSentence = "최종 우승자 : ";
        let winners = new Array();

        winnerIndex = carGoCNT.indexOf(WINNER_VALUE);

        while (winnerIndex !== -1) {
            carGoCNT[winnerIndex] = -1
            winners.push(winnerIndex);
            winnerIndex = carGoCNT.indexOf(WINNER_VALUE);
        }

        if (winners.length === 1) {
            winnerSentence = winnerSentence + CARS[winners[0]]
        } else if (winners.length > 1) { //공동우승자가 생길 시
            winnerSentence = winnerSentence + winners.map((winner) => CARS[winner]).join(', ');
        }

        Console.print(winnerSentence);
    }


}

export default App;
