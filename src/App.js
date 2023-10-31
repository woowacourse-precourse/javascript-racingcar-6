import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    class Car {
        constructor(name) {
            this.name = name;
            this.position = 0;
        }
    
        move() {
            const moveValue = MissionUtils.Random.pickNumberInRange(0, 9);
            if (moveValue >= 4) {
                this.position++;
            }
        }
    
        getPositionString() {
            return '-'.repeat(this.position);
        }
    }
    
    async function getUserInput() {
        try {
            const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요(이름은 쉼표(,)로 구분):");
            const carNames = input.split(',');
            return carNames;
        } catch (error) {
            MissionUtils.Console.print("[ERROR] " + error.message);
            return null;
        }
    }
    
    function raceCars(carNames, numMoves) {
        const cars = carNames.map(name => new Car(name));
    
        for (let i = 0; i < numMoves; i++) {
            cars.forEach(car => car.move());
        }
    
        const maxPosition = Math.max(...cars.map(car => car.position));
        const winners = cars.filter(car => car.position === maxPosition).map(car => car.name);
    
        return { cars, winners };
    }
    
    async function playGame() {
        const carNames = await getUserInput();
        if (!carNames) return;
    
        try {
            const numMoves = parseInt(await MissionUtils.Console.readLineAsync("시도할 횟수를 입력하세요:"));
            if (numMoves <= 0 || isNaN(numMoves)) {
                MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
                return;
            }
    
            const { cars, winners } = raceCars(carNames, numMoves);
    
            for (let i = 0; i < numMoves; i++) {
                cars.forEach(car => {
                    const positionString = car.getPositionString();
                    MissionUtils.Console.print(`${car.name}: ${positionString}`);
                });
                MissionUtils.Console.print('');
            }
    
            MissionUtils.Console.print("최종 우승자: " + winners.join(', '));
        } catch (error) {
            MissionUtils.Console.print("[ERROR] " + error.message);
        }
    }
    
    playGame();        
  }
}

export default App;
