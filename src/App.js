import {MissionUtils, Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    const CARLIST = await this.getCarList();
    const ATTEMPS = await this.getAttempts();

    Console.print("실행 결과");
    for(var i =0; i<ATTEMPS; i++){
      this.randomMoveOfCar(CARLIST);
      this.printCarPosition(CARLIST);
    }

    this.printWinner(CARLIST);

  }

  async getCarList() {
    const INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분)\n");
    const CARNAMES = INPUT.split(",");

    if (INPUT.includes(" ")) {
      throw new Error("[ERROR] 띄어쓰기 대신 쉼표로만 입력해주세요.");
    }
    const CARLIST = [];

    for (let i = 0; i < CARNAMES.length; i++) {
      let name = CARNAMES[i];
      if (name.length > 6) {
        throw new Error("[ERROR] 자동차의 이름은 5자 이하여야 합니다.");
      }
      CARLIST.push({ name, distance: 0 });
    }

    return CARLIST;
  }


  async getAttempts(){
    const ATTEMPTS = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    if(isNaN(ATTEMPTS))
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    else if(ATTEMPTS <= 0)
      throw new Error("[ERROR] 0보다 큰 숫자를 입력해주세요.");
    return parseInt(ATTEMPTS);
  }

  randomMoveOfCar(CARLIST){
    for(const CAR of CARLIST){
      let move = MissionUtils.Random.pickNumberInRange(0, 9);
      if(move > 3)
        CAR.distance += move;
    }
  }

  printCarPosition(CARLIST){
    for(const CAR of CARLIST){
      Console.print(`${CAR.name} : ${'-'.repeat(CAR.distance)}`);
    }
  }

  printWinner(CARLIST) {
    let maxDistance = -1;
    const winners = [];

    for (const CAR of CARLIST) {
      if (CAR.distance > maxDistance) {
        maxDistance = CAR.distance;
        winners.length = 0; // Clear the previous winners
        winners.push(CAR.name);
      } else if (CAR.distance === maxDistance) {
        winners.push(CAR.name);
      }
    }

    if (winners.length === 1) {
      Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
  }
}

export default App;
