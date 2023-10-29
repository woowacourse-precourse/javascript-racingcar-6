import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;

class Output {
  constructor() {
    Console.print("실행 결과\n");
  }
  // 매개변수로 Car 객체배열을 받는다.
  printResult(Cars) {
    // 1번 실행할 때 마다 출력해야한다.
    // 각 객체의 이동횟수 만큼 - 출력해준다.
    Cars.forEach((car) => {
      Console.print(`${car.name} : ${car.dashes.repeat(car.move_times)}`);
    });
    Console.print("\n");
  }

  // 객체 멤버변수로 이동한 횟수를 가진다는 가정
  printWinners(Cars) {
    const max_times = Math.max(...Cars.map((car) => car.move_times));
    //todo 숫자형인지 문자인지 비교가 되는지 체크해봐야한다
    const winners = Cars.filter((car) => car.move_times === max_times)
      .map((car) => car.name)
      .join(",");
    Console.print(`최종 우승자 : ${winners}`);
  }
}
export default Output;
