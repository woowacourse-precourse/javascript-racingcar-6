import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const CAR = [];
    let candidate = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n',
    );
    candidate.split(',').forEach(name => {
      if (name.length > 5) {
        throw new Error('자동차 이름은 5자 이하여야 합니다.');
      }
      CAR.push([name, '']);
    });
    MissionUtils.Console.print(CAR);
  }
}

export default App;
