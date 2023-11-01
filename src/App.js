import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const inputString = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carNames = inputString.split(',').map(item => item.trim())
      .filter(item => {
        if (item.length > 5) 
          throw new Error('[ERROR] 이름이 5자 초과입니다.');
      });
    const attempt = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');

    MissionUtils.Console.print('실행 결과');
    const carForward = new Array(carNames.length).fill(0);
    for (let i = attempt; i > 0; i--) 
      for (let j = 0; j < carNames.length; j++)
        this.updateCarForward(carForward, carNames, j);
      
    let max = [carForward[0]];
    let maxIndex = 0;
    for (let i = 1; i < carForward.length; i++) 
      if (max[0] <= carForward[i]) 
        max[maxIndex++] = carForward[i];

    MissionUtils.Console.print('최종 우승자 : ');
    for (let i = 0; i < max.length; i++) {
      if (i > 0)
        MissionUtils.Console.print(', ');
      MissionUtils.Console.print(max[i]);
    }
  }

  updateCarForward(carForward, carNames, index) {
    const forward = MissionUtils.Random.pickNumberInRange(0, 9);
    if (forward >= 4) 
      carForward[index] += 1;

    MissionUtils.Console.print(carNames[index] + ' : ');
    for (let i = 0; i < carForward[index]; i++) 
      MissionUtils.Console.print('-');
  }
}

export default App;
