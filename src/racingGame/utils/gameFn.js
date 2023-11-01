import { Console, Random } from "@woowacourse/mission-utils";

export const getMaxMove = (list) => {
  const maxMove = list.reduce((acc, cur) => {
    return acc >= cur.moveCount ? acc : cur.moveCount;
  }, 0);
  return maxMove;
};

export const getWinList = (list, maxMove) => {
  const winList = list.filter((car) => car.moveCount === maxMove);
  return winList;
};

export const printResult = (list) => {
  const newList = list.map((input) => input.name).join(", ");
  Console.print(`최종우승자 : ${newList}`);
};

export const getRandomNum = () => {
  return Random.pickNumberInRange(0, 9);
};
