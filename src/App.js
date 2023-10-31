const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  async play() {
    async function getCarName() {
      let carNameArray = [];
      let carNameString = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );

      carNameArray = carNameString.split(",");
      isValidateName(carNameArray);
      return carNameArray;
    }
    //자동차 이름 오류 확인
    function isValidateName(userInput) {
      if (userInput.includes(" ")) {
        throw new Error("[ERROR] 띄워쓰기를 하지 마세요.");
      }
      for (let element of userInput) {
        if (userInput.includes(" ")) {
          throw new Error("[ERROR] 띄워쓰기를 하지 마세요.");
        } else if (element.length > 6) {
          throw new Error("[ERROR] 5글자 이하로 적어주세요.");
        }
      }
    }

    async function getRaceCount() {
      let raceCountString = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?"
      );
      let raceCount = parseInt(raceCountString);

      isValidateNum(raceCount);
      return raceCount;
    }
    //반복 횟수 오류 확인
    function isValidateNum(userInput) {
      if (!isNaN(userInput)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      } else if (userInput < 0) {
        throw new Error("[ERROR] 1 보다 높은 숫자를 입력해주세요.");
      }
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
        raceInfo.push(`${carNameArray[i]}` + " : ");
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
        for (const element of raceInfo) {
          MissionUtils.Console.print(element);
        }
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
    MissionUtils.Console.print(playRacingGame());
  }
}

export default App;
