import messagePrinter from "./messagePrinter";
import GAME_MESSAGE from "../constant/gameMessage";

const printWinners = (carNameArr, curMoveForwardArr) => {
  const maxMove = Math.max(...curMoveForwardArr);

  const winners = [];

  for (let i = 0; i < carNameArr.length; i++) {
    if (maxMove === curMoveForwardArr[i]) {
      winners.push(carNameArr[i]);
    }
  }

  messagePrinter.outputPrint(GAME_MESSAGE.print_winners(winners));
};

export default printWinners;
