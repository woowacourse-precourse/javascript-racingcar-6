import { Console } from "@woowacourse/mission-utils";
export default class EndGame {
    result(carList) {
        let winnerList = [];
        carList.sort((a, b) => b[1] - a[1]);
        carList.forEach((car) => {
          if (car[1] != carList[0][1]) return winnerList;
          winnerList.push(car[0]);
        });
        Console.print("최종 우승자 : " + winnerList.join(", "));
      }
}