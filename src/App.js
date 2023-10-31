import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 입력: 경주할 자동차 이름
    const carNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNamesArray = carNames.split(',');

    // 이름에 대한 예외 상황 처리
    if (carNamesArray.some(name => name.trim() === '')) {
      throw new Error('[ERROR] 모든 자동차의 이름이 존재해야 합니다.');
    }
    if (carNamesArray.some(name => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
    
    // 입력 : 시도횟수
    let trialNumberString = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    let trialNumber = parseInt(trialNumberString);

    // 시도 횟수에 대한 예외 상황 처리
    if (isNaN(trialNumber) || trialNumber <= 0 || trialNumber !== parseInt(trialNumber)) {
      throw new Error('[ERROR] 올바른 시도 횟수가 아닙니다.');
    }

    // 게임 진행
    MissionUtils.Console.print('\n실행 결과');
    const carPositions = carNamesArray.map(() => '-'.repeat(0)); // 초기 위치

    while (trialNumber > 0) {
      // 한 차수마다 무작위 이동
      const moveResults = carNamesArray.map((name) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        return {
          name,
          moved: randomNumber >= 4,
        };
      });

      // 차수별 실행 결과 출력
      moveResults.forEach((result) => {
        if (result.moved) {
          carPositions[carNamesArray.indexOf(result.name)] += '-';
        }
      });

      // 출력
      carNamesArray.forEach((name, index) => {
        MissionUtils.Console.print(`${name} : ${carPositions[index]}`);
      });
      MissionUtils.Console.print('');
      
      trialNumber--;
    }

    // 우승자 결정
    const maxPosition = Math.max(...carPositions.map(position => position.length));
    const winners = carNamesArray.filter((name, index) => carPositions[index].length === maxPosition);

    // 우승자 출력
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
