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
    const result = initResult(names);
    MissionUtils.Console.print("");
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < result.length; j++) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        if (randomNumber >= 4) result[j][1] += "-";
      }
      for (let j = 0; j < result.length; j++) {
        MissionUtils.Console.print(`${result[j][0]} : ${result[j][1]}`);
      }
      MissionUtils.Console.print("");
    }
    const points = [];
    const winners = [];
    for (let j = 0; j < result.length; j++) {
      points.push(result[j][1].length);
    }
    const max_point = Math.max(...points);
    for (let j = 0; j < result.length; j++) {
      if (result[j][1].length == max_point) winners.push(result[j][0]);
    }
    const temp_result = winners.join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${temp_result}`);
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

const initResult = (names) => {
  const result = [];
  for (let name of names.split(",")) {
    result.push([name, ""]);
  }
  return result;
};

export default App;
