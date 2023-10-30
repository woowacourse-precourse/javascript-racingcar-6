import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    getInput();
  }
}

async function getInput() {
  try {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const isUnderFiveCharacter = carNames.split(',').every(name => name.trim().length <= 5);
    if (/[^a-zA-Z0-9,]/.test(carNames) || !isUnderFiveCharacter) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
    }

    const chance = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    if(!/^[1-9]\d*$/.test(chance)) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
    }
    
  } catch (error) {
    throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
  }
}

export default App;
