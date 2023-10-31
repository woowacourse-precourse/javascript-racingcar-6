import { defaultErrorHandler } from '../error/errorhandler.js';

export default async function identifyWinner(gameResult) {
  try {
    const resultKeys = [...gameResult.keys()];
    const resultValues = [...gameResult.values()];
    const parsedValues = resultValues.map((item) => item.length);
    const winnerValue = Math.max(...parsedValues);
    let winnerString = '최종 우승자:';

    parsedValues.forEach((item, index) => {
      let winners = '';
      if (item === winnerValue) {
        winners += ` ${resultKeys[index]},`;
      }
      winnerString += winners;
    });

    if (winnerString[winnerString.length - 1] === ',') {
      winnerString = winnerString.slice(0, -1);
    }

    return winnerString;
  } catch (error) {
    const ERROR = defaultErrorHandler(error);
    return ERROR;
  }
}
