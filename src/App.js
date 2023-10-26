import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    const names = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    if (!isValidNames(names)) throw new Error("[ERROR]");
    const number = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    if (!isValidNumber(number)) throw new Error("[ERROR]");
    console.log(names, number);
  }
}

const isValidNames = (names) => {
  names = names.split(",");
  for (let name of names) {
    if (name.length > 5) return false;
  }
  return true;
};

const isValidNumber = (number) => {
  if (isNaN(number)) return false;
  return true;
};

export default App;
