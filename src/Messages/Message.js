import { Console } from "@woowacourse/mission-utils";

export const getCarNameMessage = () => {
  Console.print(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
};

export const getRoundNumberMessage = () => {
  Console.print("시도할 횟수는 몇 회인가요?");
};

export const afterMoveMessage = (name, showMove) => {
  Console.print(`${name} : ${showMove}`);
};

export const winnerMessage = (cars) => {
  Console.print(`최종 우승자 : ${cars}`);
};

export const lineBreakMessage = () => {
  Console.print("\n");
};
