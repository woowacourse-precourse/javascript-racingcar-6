import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async car_assign() {
    let users = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    if (users === "") {
      throw new Error("[ERROR] 공백은 입력할 수 없습니다");
    }

    users = users.split(",");

    users.forEach((user) => {
      if (user.trim() === "") {
        throw new Error("[ERROR] 공백은 입력할 수 없습니다");
      }
      if (user.length > 5) {
        throw new Error("[ERROR] 5자 이하의 자동차 이름만 가능합니다.");
      }
    });
    return users;
  }

  async get_random_number() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  async is_forward() {
    const NUM = await this.get_random_number();
    return NUM >= 4 ? true : false;
  }

  async play_racing(users, cnt) {
    let dist_number = new Array(users.length).fill(0);
    MissionUtils.Console.print("\n실행 결과");

    for (let i = 0; i < cnt; i++) {
      for (let j = 0; j < users.length; j++) {
        dist_number[j] += (await this.is_forward()) ? 1 : 0;
      }
      for (let j = 0; j < users.length; j++) {
        MissionUtils.Console.print(
          `${users[j]} : ${"-".repeat(dist_number[j])}`
        );
      }
      MissionUtils.Console.print("\n");
    }
    return dist_number;
  }

  async get_winner(distance) {
  }

  async play() {
    //user input
    const USERS = await this.car_assign();
    const CNT = await MissionUtils.Console.readLineAsync(
      "시도할 회수는 몇회인가요?\n"
    );

    //play racing
    const DISTANCE = await this.play_racing(USERS, CNT);
  }
}

export default App;
