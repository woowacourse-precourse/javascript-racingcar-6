import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;

function winnerMovelength(carMoveArray) {
  const sortMoveArray = [...carMoveArray].sort((a, b) => b.length - a.length);
  return sortMoveArray[0].length;
}

function getWinnerCarArray(carName, carMoveArray, winnerLength) {
  return carMoveArray
    .map((carMove, index) => winnerCar(carName, carMove, index, winnerLength))
    .filter((index) => index !== null);
}

function winnerCar(carName, carMove, index, winnerLength) {
  if (carMove.length === winnerLength) {
    return carName[index];
  } else {
    return null;
  }
}

function resultText(winnerCarArray) {
  const winnerCarNames = winnerCarArray.join(",");
  Console.print("최종 우승자 : " + winnerCarNames);
}

export { winnerMovelength, getWinnerCarArray, winnerCar, resultText };
