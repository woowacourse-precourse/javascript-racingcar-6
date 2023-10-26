import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async getInput(message) {
    try {
      const input = await MissionUtils.Console.readLineAsync(message);
      return input;
    } catch (error) {
      throw "[ERROR] 입력을 받는 중 실패하였습니다.";
    }
  }

  checkRightCarName(carList) {
    const set = new Set(carList);
    if (set.size !== carList.length)
      throw new Error("[ERROR] 중복된 이름의 자동차가 있습니다.");
    if (!carList.length)
      throw new Error("[ERROR] 자동차가 입력되지 않았습니다.");
    const ret = carList.every((car) => /^.{1,5}$/.test(car));
    if (!ret)
      throw new Error("[ERROR] 자동차 이름은 1~5자리로 이루어져야 합니다.");
    return true;
  }

  checkRightRoundNum(num) {
    const ret = /^[0-9]+$/.test(num);
    if (!ret) throw new Error("[ERROR] 올바른 숫자 형식이 아닙니다.");
    return true;
  }

  makeCarMap(carList) {
    const carMap = new Map();
    carList.forEach((car) => {
      carMap.set(car, 0);
    });
    return carMap;
  }

  playOneRound(carMap) {
    carMap.forEach((cnt, car) => {
      if (this.isCarGo()) carMap.set(car, cnt + 1);
    });
  }

  isCarGo() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum >= 4 ? true : false;
  }

  printCarState(carMap) {
    carMap.forEach((cnt, car) => {
      MissionUtils.Console.print(`${car} : ${"-".repeat(cnt)}`);
    });
    MissionUtils.Console.print("");
  }

  getWinner(carMap) {
    let winnerList = []; //우승자들의 이름이 담길 리스트
    let moveDistance = -1; //0이 우승자가 될수도 있기에 초기값을 -1로 둠
    carMap.forEach((cnt, car) => {
      if (moveDistance < cnt) {
        winnerList = [car];
        moveDistance = cnt;
      } else if (moveDistance === cnt) {
        winnerList.push(car);
      }
    });
    return winnerList;
  }

  printWinner(winnerList) {
    const winnerStr = winnerList.join(",");
    MissionUtils.Console.print(`최종우승자 : ${winnerStr}`);
  }

  async play() {
    // 자동차 이름 입력
    const carStrList = await this.getInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carList = carStrList.split(",");
    this.checkRightCarName(carList);
    const carMap = this.makeCarMap(carList);

    //시행횟수 입력
    const roundNum = await this.getInput("시도할 횟수는 몇 회인가요?");
    this.checkRightRoundNum(roundNum);

    //라운드 진행
    for (let i = 0; i < +roundNum; i++) {
      this.playOneRound(carMap);
      this.printCarState(carMap);
    }

    //우승자 추출
    const winnerList = this.getWinner(carMap);
    this.printWinner(winnerList);
  }
}

export default App;
