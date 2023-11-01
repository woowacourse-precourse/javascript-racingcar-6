import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const gamePlayer = await this.getCarName();
    this.getCount(gamePlayer);
  }

  async getCarName() {
    const inputCarName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carName = inputCarName.split(',');
    const gamePlayer = [];

    MissionUtils.Console.print(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n${carName}`);

    if (carName.length > 9) {
      throw new Error('[ERROR] 자동차 이름은 9 개 까지 입력 할 수 있습니다.');
    }

    carName.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력 해 주세요.');
      }
    });

    carName.forEach((name) => {
      gamePlayer.push({ name, point: 0, num: 0 });
    });

    return gamePlayer;
  }

  async getCount(gamePlayer) {
    const count = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    MissionUtils.Console.print(`시도할 횟수는 몇 회인가요?\n${count}`);
    this.startGame(gamePlayer, count);
  }

  startGame(gamePlayer, count) {
    MissionUtils.Console.print('실행결과');

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < gamePlayer.length; j++) {
        gamePlayer[j].num = MissionUtils.Random.pickNumberInRange(0, 9);
        if (gamePlayer[j].num > 3) {
          gamePlayer[j].point++;
        }
        MissionUtils.Console.print(`${gamePlayer[j].name} : ${'-'.repeat(gamePlayer[j].point)}`);
      }
    }

    let winnerPoint = 0;
    for (let i = 0; i < gamePlayer.length; i++) {
      if (gamePlayer[i].point > winnerPoint) {
        winnerPoint = gamePlayer[i].point;
      }
    }

    const winner = [];
    gamePlayer.map((player) => {
      if (winnerPoint === player.point) {
        winner.push(player.name);
      }
    });
    MissionUtils.Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default App;
