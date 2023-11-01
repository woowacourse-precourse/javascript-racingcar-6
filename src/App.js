import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  nameValidation(input) {
    let names = new Map();
    const inputArray = input.split(",");
    if (input.includes(' ')) throw new Error("[ERROR] 공백을 제외하고 입력해주세요.");
    if (input.includes(',,')) throw new Error("[ERROR] 쉼표가 연달아 입력되었습니다.");
    if (inputArray.length <= 1) throw new Error("[ERROR] 2개 이상의 자동차가 있어야 시작할 수 있습니다.");
    inputArray.forEach((item) => {
      if (item.length > 5) throw new Error("[ERROR] 5자 이하로 입력해주세요.");
      if (names.has(item)) throw new Error("[ERROR] 중복된 이름이 있습니다.");
      names.set(item, "");
    });
    return names;
  }

  roundValidation(input) {
    let rounds = 0;
    if (input === "") throw new Error("[ERROR] 입력값이 없습니다.");
    if (input.includes(' ')) throw new Error("[ERROR] 공백을 제외하고 입력해주세요.");
    if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력해주세요.");
    const stringArray = Array.from(input);
    stringArray.forEach((elements) => {
      rounds = (rounds * 10) + parseInt(elements);
    });
    return rounds;
  }

  async playerInput() {
    try{
      const nameinput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const names = this.nameValidation(nameinput);
      const numberinput = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      const rounds = this.roundValidation(numberinput);
      return [names, rounds];
    } catch(error){
      MissionUtils.Console.print(error.message);
      throw new Error();
    }
  }

  diceLogic(names, rounds) {
    let i = rounds;
    while(i != 0) {
      names.forEach((value, key, map) => {
        const num = MissionUtils.Random.pickNumberInRange(0, 9);
        if (num >= 4) map.set(key, value+"-");
        MissionUtils.Console.print(`${key} : ${map.get(key)}`);
      });
      i -= 1;
    }   
    const winners = this.whoWin(names);
    return winners;
  }

  whoWin (names){
    const winners = [];
    const ranking = Array.from(names);
    ranking.sort((a, b) => b[1].length - a[1].length);
    ranking.forEach((value, index, array) => {
        if (index === 0) winners.push(value[0]);
        if (index > 0 && array[0][1] === value[1]) winners.push(value[0]);
      }
    );
    return winners;
  }

  announceWinner (winners){
    const announce = winners.join(', ');
    MissionUtils.Console.print(`최종 우승자 : ${announce}`);
  }

  async play() {
    try {
      const stuffs = await this.playerInput();
      const winners = await this.diceLogic(stuffs[0], stuffs[1]);
      this.announceWinner(winners);
    } catch (error){}
  }
}

const app = new App();
app.play();

export default App;
