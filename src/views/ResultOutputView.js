import { Console } from "@woowacourse/mission-utils";

const ResultOutputView = (names, cars) => {
  names.forEach((name, index) => {
    Console.print(`${name} : ${cars[index].getStraightCount()}`);
  });
};
export default ResultOutputView;
