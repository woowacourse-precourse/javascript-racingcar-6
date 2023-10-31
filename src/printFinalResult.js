import { MissionUtils } from "@woowacourse/mission-utils";

export default function printFinalResult(map) {
  const MAP_TO_ARRAY = Array.from(map);
  MAP_TO_ARRAY.sort((a, b) => b[1] - a[1]); //내림차순 정렬

  if (MAP_TO_ARRAY[0][1] !== MAP_TO_ARRAY[1][1]) {
    //단독 우승자
    MissionUtils.Console.print(`최종 우승자 : ${MAP_TO_ARRAY[0][0]}`);
  } else {
    //공동 우승자
    let i = 0;
    MissionUtils.Console.print(`최종 우승자 : `);

    while (MAP_TO_ARRAY[i][1] !== MAP_TO_ARRAY[i + 1][1]) {
      MissionUtils.Console.print(MAP_TO_ARRAY[i][0] + ", ");
      i++;
    }
    MissionUtils.Console.print(MAP_TO_ARRAY[i][0]);
  }
}
