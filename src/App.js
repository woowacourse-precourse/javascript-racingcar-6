import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cars = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const cars_arr = cars.split(",");
    await this.getError(cars_arr);

    const trial_count = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    MissionUtils.Console.print("실행결과");
    this.startRace(trial_count, cars_arr);
  }

  // 함수: 잘못된 차이름 입력값 에러 처리
  async getError(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim().length > 5) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
  }

  // 함수: 경주 시작
  async startRace(count, arr) {
    for (let k = 0; k < count.length; k++) {
      this.getWinLine(arr);
    }
  }

  // 함수: 이긴 횟수에 맞춰 '-' 추가
  async getWinLine(arr) {
    let cars_win_count_num = new Array(arr.length).fill(0);
    let cars_win_count_line = new Array(arr.length).fill("");

    for (let i = 0; i < arr.length; i++) {
      const random = MissionUtils.Random.pickNumberInRange(0, 9);
      let win_line = "";

      if (random >= 4) {
        cars_win_count_num[i]++;
        win_line += "-";
      }
      cars_win_count_line[i] = win_line;
      this.printWinLine(arr, cars_win_count_line[i]);
    }
    const winners = await this.getWinnerName(cars_win_count_num, arr);
    this.printWinnerName(winners);
  }

  // 함수: 결과값 출력
  async printWinLine(arr, win_line) {
    for (let i = 0; i < arr.length; i++) {
      MissionUtils.Console.print(`${arr[i]} : ${win_line}`);
    }
  }

  //함수: 최종 우승자 출력
  async printWinnerName(winners) {
    if (winners.length === 1) {
      MissionUtils.Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
    }
  }

  // 함수: 우승자 이름 가져오기
  async getWinnerName(arr_count, arr_name) {
    const maxNumber = Math.max(...arr_count);
    const maxIndexes = [];
    arr_count.forEach((number, index) => {
      if (number === maxNumber) {
        maxIndexes.push(arr_name[index]);
      }
    });
    return maxIndexes;
  }
}

export default App;
