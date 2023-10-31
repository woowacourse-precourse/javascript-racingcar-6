import { Console } from '@woowacourse/mission-utils';

class User {
  async inputPlayersName() {
    const inputPlayersName = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const players = inputPlayersName.split(',');

    players.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    });

    return players;
  }

  async inputMoveNum() {
    const inputMoveNum = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    return parseInt(inputMoveNum);
  }
}

export default User;
