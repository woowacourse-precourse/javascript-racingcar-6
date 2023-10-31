import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let carList = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    carList = this.validateCarList(carList);
    const gameCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.validateGameCount(gameCount);
    
    carList = this.gamePlay(carList,gameCount);
    const winnerList = this.findWinner(carList)
    Console.print("최종 우승자 : "+ winnerList)
  }
  validateCarList(carList) {
    if (carList.length === 0) {
      throw new Error(
        "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능합니다."
      );
    }

    carList = carList.split(",");

    if (carList.some((car) => car.length > 5 || car.includes(" "))) {
      throw new Error("[ERROR] 이름은 공백없이 5자 이하만 가능합니다.");
    }
    return carList
  }
  validateGameCount(gameCount) {
    if (isNaN(gameCount)) {
      throw new Error("[ERROR] 입력받은 숫자가 잘못된 형식입니다.");
    }
  }
  showCount(count) {
    let temp_count = ""
    while (count > 0) {
      temp_count+="-"
      count--
    }
    return temp_count
  }
  gamePlay(carList,gameCount) {
    let carMovingCountList = carList.map(e=>[e,0])
    Console.print("\n실행 결과")
    while(gameCount > 0) {
      carMovingCountList= this.moveCar(carMovingCountList)
      gameCount--
    }
    return carMovingCountList
  }

  moveCar(carMovingCountList) {
    carMovingCountList.forEach(car => {
      const number = MissionUtils.Random.pickNumberInRange(0,9);
      if (number >= 4) car[1]++
      Console.print(car[0] + " : " + this.showCount(car[1]))
    });
    Console.print("\n")
    return carMovingCountList
  }

  findWinner(carList) {
    let winnerList = []
    carList.sort((a,b)=>b[1]-a[1])
    carList.forEach(car=>{
      if (car[1]!=carList[0][1]) return winnerList
      winnerList.push(car[0])
    })
    return winnerList.join(", ")
  }
}

const app = new App();
app.play();
export default App;
