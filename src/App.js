const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  async play() {

    async function getCarName() {
      let carNameArray = [];
      let carNameString = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      if (carNameString.includes(" ")) {
        throw new Error("[ERROR] 띄워쓰기를 하지 마세요.");
      } else if (carNameString.length > 6) {
        throw new Error("[ERROR] 5글자 이하로 적어주세요.");
      }

      carNameArray = carNameString.split(",");

      return carNameArray;
    }

    async function getRaceCount() {
      let raceCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
      if (isNaN(raceCount)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      } else if (raceCount < 0) {
        throw new Error("[ERROR] 1 보다 높은 숫자를 입력해주세요.");
      }
      return raceCount;
    }

    function playRacingGame() {
      let raceCount = getRaceCount();
      let carNameArray = getCarName();
      let raceInfo = [];
      let raceResult = [];
      let winnerLength = [];
      let winnerArray = [];
      let winner = "최종 우승자 : ";

      for (let i = 0; i < carNameArray.length; i++) {
        raceInfo.push(`${carNameArray[i]} +: `);
      }

      let randomNum = MissionUtils.Random.pickNumberInRange(0, 9);

      //레이스 진행
      let repeat = 0;
      while (repeat < raceCount) {
        for (let i = 0; i < carNameArray.length; i++) {
          if (randomNum >= 4) {
            raceInfo[i] + "-";
          }
        }
        repeat++;
      }

      //우승자 길이
      for (let i = 0; i < carNameArray.length; i++) {
        raceResult[i] = raceInfo[i].length;
      }

      //우승자 선별
      winnerLength = Math.max.apply(...raceResult);
      for (let i = 0; i < carNameArray.length; i++) {
        if (raceResult[i] === winnerLength) {
          winnerArray.push(carNameArray[i]);
        }
      }
      winner += winnerArray.join(", ");
      return winner;
    }
    playRacingGame();
  }
}

export default App;
