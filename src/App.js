import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    async function getUserCarNames() {
      //자동차 이름 입력받기
      MissionUtils.Console.print(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      const carNameUserInput = await MissionUtils.Console.readLineAsync("");
      //쉼표 기준 분리
      const carNames = carNameUserInput.split(",");

      //5자 이하인지 확인하기
      function isNameLowerThan5(element, index, array) {
        return element.length <= 5;
      }

      //5자 이상이면 예외 처리
      if (carNames.every(isNameLowerThan5) === false) {
        throw new Error("[ERROR] 이름은 5글자 이하여야 합니다.");
      }

      return carNames;
    }

    async function getUserTryNumbers() {
      //시도할 횟수 입력받기
      MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
      const tryNumber = await MissionUtils.Console.readLineAsync("");

      return tryNumber;
    }

    function printScore(carNames, tryNumber) {
      //carScore 객체 만들기
      const carScoreObj = {};
      carNames.forEach((car) => {
        carScoreObj[car] = "";
      });

      //각 자동차 별 무작위 수 구하기
      MissionUtils.Console.print("");
      MissionUtils.Console.print(`실행 결과`);
      for (let i = 0; i < tryNumber; i++) {
        const movingCars = [];

        carNames.forEach((car) => {
          const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

          if (randomNumber >= 4) {
            movingCars.push(car);
          }
        });

        //횟수마다 이동 결과 출력
        carNames.forEach((car) => {
          if (movingCars.includes(car)) {
            carScoreObj[car] += "-";
          }
          MissionUtils.Console.print(`${car} : ${carScoreObj[car]}`);
        });
        MissionUtils.Console.print("");
      }

      return carScoreObj;
    }

    function findWiner(carScoreObj) {
      //우승자 출력하기
      const winner = [];
      let winnerLength = 0;

      for (const car in carScoreObj) {
        if (carScoreObj[car].length >= winnerLength) {
          winnerLength = carScoreObj[car].length;
          winner.push([car, winnerLength]);
        }
      }

      const finalWinner = winner[winner.length - 1];
      const winners = winner.filter((person) => person[1] === finalWinner[1]);
      const answer = [];

      winners.forEach((person) => answer.push(person[0]));

      MissionUtils.Console.print(`최종 우승자 : ${answer.join(", ")}`);
    }

    const cars = await getUserCarNames();
    const userTryNumber = await getUserTryNumbers();
    const carScoreObj = printScore(cars, userTryNumber);
    findWiner(carScoreObj);
  }
}

const app = new App();
app.play();

export default App;
