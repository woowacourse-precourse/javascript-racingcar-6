import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const START_GAME = async() => { // 게임 시작 이벤트
      const INPUT_CAR_NAME = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);
      const ARRAY_CAR_NAME = INPUT_CAR_NAME.split(",").map((name) => name.trim()); // 입력받은 이름을 쉼표(,)로 구분하여 공백은 지우고 배열로 변경
      const OBJECT_CAR = ARRAY_CAR_NAME.map((name) => ({ name, progress : "" })); // ARRAY_CAR_NAME을 name과 progress 객체배열로 변경

      if (ARRAY_CAR_NAME.some((name) => name.length > 5)) throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력 가능합니다.");
      
      RACING_CAR_GAME(OBJECT_CAR); // 각 자동차의 정보를 전달
    }

    const RACING_CAR_GAME = async(OBJECT_CAR) => { // 레이싱 게임 이벤트(각 자동차의 정보를 가져오기)
      const INPUT_TRY_COUNT = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const TRY_COUNT = parseInt(INPUT_TRY_COUNT); // 횟수 입력값을 정수로 변환
      const ROUND_RESULT = []; // 전체 라운드를 포함한 결과 배열

      if (isNaN(TRY_COUNT) || TRY_COUNT.toString() !== INPUT_TRY_COUNT) throw new Error("[ERROR] 숫자만 입력 가능합니다."); // 숫자가 아닌 문자나 소수점을 입력한 경우 예외처리

      for (let i = 0; i < TRY_COUNT; i++) {
        UPDATE_CAR_PROGRESS(OBJECT_CAR) // 각 자동차 정보를 전달
        
        ROUND_RESULT.push(OBJECT_CAR.map((car) => `${car.name} : ${car.progress}`).join("\n"));
      }

      const MAX_PROGRESS = OBJECT_CAR.reduce((max, car) => { // 최대 진행도 산출
        return Math.max(max, car.progress.length);
      }, -1)

      const WINNERS = OBJECT_CAR.filter((car) => car.progress.length === MAX_PROGRESS); // 최대 진행도 자동차 이름 산출
      const WINNER_LIST = WINNERS.map((car) => car.name); // 최종 우승자 목록

      Console.print(`\n실행 결과\n${ROUND_RESULT.join("\n\n")}`);
      Console.print(`\n최종 우승자 : ${WINNER_LIST.join(", ")}`);
    }

    const UPDATE_CAR_PROGRESS = (OBJECT_CAR) => { // 각 자동차의 이름과 진행도(각 자동차의 정보를 가져오기)
      for (let j = 0; j < OBJECT_CAR.length; j++) {
        const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);

        if (RANDOM_NUMBER >= 4) {
          OBJECT_CAR[j].progress += "-";
        }
      }
    }

    await START_GAME();
  }
}

export default App;
