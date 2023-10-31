import { MissionUtils as MU } from "@woowacourse/mission-utils";

export const HandleOutput = {
  initial: () => {
    MU.Console.print("\n실행 결과");
  },
  roundResult: (cars) => {
    const result = `${cars.map((car) => parseCarResult(car)).join("\n")}\n`;
    MU.Console.print(result);
  },
  finalResult: (winners) => {
    MU.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  },
};

const parseCarResult = (car) =>
  `${car.name} :${progressRepeater(car.progress)}`;

const progressRepeater = (progress) =>
  progress ? " ".concat("-".repeat(progress)) : "";
