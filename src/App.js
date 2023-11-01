import { MissionUtils, Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.getCarName();
  }
  // 차 이름 받기 (유저 입력 받는 것 앞에는 비동기?)
  async getCarName() {
    const car = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉽표(,) 기준으로 구분)"
    );
    const carName = car.split(",");

    //자동차 이름 예외사항
    for (let i = 0; i < carName.length; i++) {
      if (carName[i].length > 5)
        throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
    }
    this.getTryNum(carName);
  }

  //시도 횟수 받기
  async getTryNum(carName) {
    const tryNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    if (isNaN(tryNum) || tryNum < 0)
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");

    this.result(carName, tryNum);
  }

  //결과 받기
  result(carName, tryNum) {
    Console.print("실행 결과");

    //전진한 횟수 저장하는 변수
    var goCount = [];
    for (let i = 0; i < carName.length; i++) {
      goCount.push(0);
    }
    // 총 tryNum만큼 실행
    for (let k = 0; k < tryNum; k++) {
      for (let i = 0; i < carName.length; i++) {
        const randomNum = Random.pickNumberInRange(0, 9); //랜덤한 숫자 불러오기
        if (randomNum >= 4) {
          goCount[i] += 1;
        }
        const message = `${carName[i]} : ${"-".repeat(goCount[i])}`;
        Console.print(message);
      }
      Console.print("");
    }
    //우승자 return 하기
    const winner = [];
    const maxLong = Math.max.apply(null, goCount);
    for (let i = 0; i < goCount.length; i++) {
      if (goCount[i] == maxLong) {
        winner.push(carName[i]);
      }
    }

    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }
}
const app = new App();
app.play();

export default App;
