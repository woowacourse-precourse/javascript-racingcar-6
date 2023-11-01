import { Console, Random} from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNamesList = await this.getCarNames();
    const moveCount = await this.getNumber();
    this.gameStart(carNamesList,moveCount);
  }

  async getCarNames() {
    const carNamesList = [];
    const carNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    carNames.split(',').forEach((carname) => {
      if(carname.length > 5) throw new Error("[ERROR] 5자 이하 이름이 아닙니다.");
      carNamesList.push(carname);
    });
    return carNamesList;
  }

  async getNumber() {
    const number = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if(number === 0 || number === null || Number.isNaN(number)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    return number;
  }

  checkCarMove(cars, number) {
    Console.print("\n실행 결과");
    while(number > 0){
      cars.forEach((car) => {
        const random = Random.pickNumberInRange(0,9);
        if(random >= 4) car.moveCount++;
      });
      this.printResult(cars);
      number--;
    }
    this.printWinner(cars);
  }

  printResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.moveCount)}`);
    });
    Console.print('');
  }

  printWinner(cars) {
    const maxMove = Math.max(...cars.map((car) => car.moveCount));
    const winners = cars.filter((car) => car.moveCount === maxMove).map((car) => car.name);
    Console.print(winners.length > 1 ? `최종 우승자 : ${winners.join(', ')}` : `최종 우승자 : ${winners[0]}`);
  }

  gameStart(cars,number) {
    const carsList = [];
    cars.forEach((elem) => {
      let carObj = {};
      carObj.name = elem;
      carObj.moveCount = 0;
      carsList.push(carObj);
    });    
    this.checkCarMove(carsList,number);
  }
}

export default App;
