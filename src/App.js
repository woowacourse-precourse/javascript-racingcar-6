import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 자동차 이름을 입력
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let userInput = await Console.readLineAsync("");
    let userNames = userInput.split(",");
    let userCounts = new Array(userNames.length).fill(0);

    // TODO: 길이 검사하는 함수!
    for (let i = 0; i < userNames.length; i++) {
      if (userNames[i].length > 5) {
        throw new Error("[ERROR] 5자 이상의 이름을 입력했습니다.");
      }
    }

    // 시도할 횟수를 입력
    Console.print("시도할 횟수는 몇 회인가요?");
    let maxCount = await Console.readLineAsync("");
    if (isNaN(maxCount)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    maxCount = parseInt(maxCount, 10);

    Console.print("실행 결과");

    for (let i = 0; i < maxCount; i++) {
      // TODO: userNames.length, userCounts 받아서 더해주는 함수
      for (let j = 0; j < userNames.length; j++) {
        // 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후
        // 무작위 값이 4 이상일 경우이다.
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          userCounts[j]++;
        }
      }

      // TODO: 작대기 만들어주는 함수
      for (let j = 0; j < userNames.length; j++) {
        let dashes = "";
        for (let x = 0; x < userCounts[j]; x++) {
          dashes += "-";
        }
        Console.print(`${userNames[j]} : ${dashes}`);
      }
      Console.print("");
    }

    // 최댓값 찾기
    let winnerNumber = Math.max(...userCounts);

    let winners = "";
    for (let i = 0; i < userCounts.length; i++) {
      // TODO: 우승자 목록 뽑아주는 함수
      if (userCounts[i] === winnerNumber) {
        winners += `${userNames[i]}, `;
      }
    }

    Console.print(`최종 우승자 : ${winners.slice(0, -2)}`);
  }
}

export default App;
