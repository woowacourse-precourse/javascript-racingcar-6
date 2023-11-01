import { Console } from "@woowacourse/mission-utils";

export const getRaceResult = (carObject) => {
  carObject.map((car) => {
    Console.print(`${car.name} : ${car.race}`);
  });
  Console.print("");
};