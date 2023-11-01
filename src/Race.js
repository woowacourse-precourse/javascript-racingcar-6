import { Console, Random } from "@woowacourse/mission-utils";
class Race {
  static MIN_NUMBER = 0;
  static MAX_NUMBER = 9;
  static MOVE_STANDARD = 4;
  static MOVE_VALUE = 1;
  static MOVE_LINE = "-";
  static RESULT_NOTIFICATION = "실행 결과";
  static FINAL_RESULT_NOTIFICATION = "최종 우승자";

  // 0에서 9사이의 랜덤숫자를 만들고, 자동차를 전진 시키는 함수
  createNumber = (carList) => {
    for (const car in carList) {
      const moveNum = Random.pickNumberInRange(
        Race.MIN_NUMBER,
        Race.MAX_NUMBER,
      );
      if (moveNum >= Race.MOVE_STANDARD) {
        carList[car] += Race.MOVE_VALUE;
      }
    }
    this.printRaceResult(carList);
  };

  // 자동차의 전진현황을 전달하는 함수
  moveCar = (inputChance, carList) => {
    Console.print(Race.RESULT_NOTIFICATION);
    for (let i = 0; i < inputChance; i++) {
      this.createNumber(carList);
    }
    this.finalResult(carList);
  };

  // 자동차의 전진현황을 출력하는 함수
  printRaceResult(carList) {
    for (const car in carList) {
      Console.print(`${car} : ${Race.MOVE_LINE.repeat(carList[car])}`);
    }
    Console.print("");
  }

  // 최종결과를 반환하는 함수
  finalResult = (carList) => {
    const maxScore = Math.max(...Object.values(carList));
    const winner = Object.keys(carList).filter(
      (car) => carList[car] === maxScore,
    );

    Console.print(`${Race.FINAL_RESULT_NOTIFICATION} : ${winner}`);
  };
}

export default Race;
