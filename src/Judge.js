import { Console, Random } from '@woowacourse/mission-utils';

class Judge {
  checkMoveCondition(randomNum) {
    if (randomNum >= 4) {
      return true;
    }

    return false;
  }

  playStep(gameResultInStep) {
    gameResultInStep.forEach((player) => {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (this.checkMoveCondition(randomNum)) {
        player.moveNum++;
      }
    });
  }

  printResultInStep(gameResultInStep) {
    let result = '';
    gameResultInStep.forEach((player) => {
      let moveMark = '';
      for(let i = 0; i < player.moveNum; i++) {
        moveMark += '-';
      }

      result += `${player.name} : ${moveMark}\n`;
    });

    Console.print(result);
  }

  printWinner(gameResult) {
    let maxMove = 0;

    gameResult.forEach((player) => {
      if (maxMove < player.moveNum) {
        maxMove = player.moveNum;
      }
    });

    const winnerPlayers = [];
    gameResult.forEach((player) => {
      if (player.moveNum === maxMove) {
        winnerPlayers.push(player.name);
      }
    });

    Console.print(`최종 우승자 : ${winnerPlayers.map((member) => member).join(', ')}`);
  }
}

export default Judge;
