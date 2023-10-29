import { Console } from "@woowacourse/mission-utils";

class Judge {
  checkMoveCondition(randomNum) {
    if (randomNum >= 4) {
      return true;
    }

    return false;
  }

  printResultInStep(gameResultInStep) {
    let result = '';
    gameResultInStep.forEach((player) => {
      let moveMark = ''
      for(let i = 0; i < player.moveNum; i++) {
        moveMark += '-';
      }
      result += `${player.name} : ${moveMark}\n`
    })

    Console.print(result);
  }
}

export default Judge;