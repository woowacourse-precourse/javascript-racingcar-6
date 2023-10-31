import { MissionUtils } from "@woowacourse/mission-utils";

export function printCar(name, move){
  const printMove = '-'.repeat(move); // move 횟수만큼 출력
  MissionUtils.Console.print(`${name} : ${printMove}`)
}