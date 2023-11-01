import { MissionUtils } from "@woowacourse/mission-utils";

let winnerarray = [];

export function winner(carnames, carMoveStorage) {
  var maxmoves = 0;
  winnerarray = [];
  for (let i = 0; i < carnames.length; i++) {
    maxmoves = Math.max(carMoveStorage[carnames[i]].length,maxmoves);
  }
  for (let i = 0; i < carnames.length; i++) {
    const move = carMoveStorage[carnames[i]].length
    if (move === maxmoves) {
      winnerarray.push(carnames[i]); 
    }
  }
  printWinner();
}
  
function printWinner() {
  if (winnerarray.length === 1) {
    MissionUtils.Console.print(`최종 우승자 : ${winnerarray[0]}`);
  } else {
    printWinners()
  }
}
  
function printWinners() {
  const winners = winnerarray
  const winnersPrint = winners.map((member) => member).join(', ');
  MissionUtils.Console.print(`최종 우승자 : ${winnersPrint}`);
}