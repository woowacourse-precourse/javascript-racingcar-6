import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async car_assign() {
    let users = MissionUtils.Console.readLineAsync(
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

  async get_random_number() {}

  async play_racing(users, cnt) {}

  async get_winner() {}

  async play() {
    const USERS = this.car_assign();
  }
}

export default App;
