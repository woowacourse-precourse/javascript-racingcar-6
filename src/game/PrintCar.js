import { MissionUtils } from "@woowacourse/mission-utils";

export function printCar(name, move){
  const printMove = '-'.repeat(move);
  MissionUtils.Console.print(`${name} : ${printMove}`)
}