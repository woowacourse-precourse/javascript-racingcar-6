import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    const cars = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const cars_arr = cars.split(",");
    for (let i = 0; i < cars_arr.length; i++) {
      if (cars_arr[i].trim().length > 5) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    let cars_win_count_num = new Array(cars_arr.length).fill(0);
    let cars_win_count_line = new Array(cars_arr.length).fill("");
    const trial_count = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    MissionUtils.Console.print("실행결과");
    for (let k = 0; k < trial_count.length; k++) {
      for (let i = 0; i < cars_arr.length; i++) {
        const random = MissionUtils.Random.pickNumberInRange(0, 9);
        let win_line = "";
        if (random >= 4) {
          cars_win_count_num[i]++;
          for (let j = 0; j < cars_win_count_num[i]; j++) {
            win_line += "-";
          }
        }

        for (let i = 0; i < cars_arr.length; i++) {
          MissionUtils.Console.print(
            `${cars_arr[i]} : ${cars_win_count_line[i]}`
          );
        }
        cars_win_count_line[i] = win_line;
      }
    }
    console.log(cars, "주어진");
    console.log(cars_arr, "자동차");
    console.log(cars_win_count_num, "숫자승리");
    console.log(cars_win_count_line, "작대기승리");

    MissionUtils.Random.pickNumberInRange(0, 9); //0에서 9까지의 정수 중 한 개의 정수 반환
  }
}

export default App;
