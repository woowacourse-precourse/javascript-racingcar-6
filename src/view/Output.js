import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;

class Output {
  // 매개변수로 Car 객체배열과, 이동횟수를 받는다.
  printResults(Cars, try_number) {}

  // 각 객체들의 멤버변수로 이동한 횟수를 가진다.
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
