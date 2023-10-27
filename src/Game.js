import { Console } from "@woowacourse/mission-utils";

class Game {
  start = async () => {
    const carNameList = await this.getCarNameList();
    console.log(carNameList);
  };

  getCarNameList = async () => {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const list = input.split(",").map((name) => name.trim());
    if (input.length == 0 || !this.isCarNameListValid(list)) {
      throw new Error("잘못된 형식입니다.");
    }
    return list;
  };

  isCarNameListValid = (list) => {
    if (list.length == 0) return false;
    if (new Set(list).size != list.length) return false;
    return list.every((name) => {
      return name.length > 0 && name.length <= 5;
    });
  };
}

export default Game;
