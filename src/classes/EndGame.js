import { Console } from "@woowacourse/mission-utils";
export default class EndGame {
    result(carList) {
        this.decendCarList(carList)
        const winnerList = this.makeWinnerList(carList)
        Console.print("최종 우승자 : " + winnerList);
      }

    decendCarList (carList) {
        carList.sort((a, b) => b[1] - a[1]);
    }

    makeWinnerList (carList) {

        const result = []

        carList.forEach((car) => {
            if (car.count != carList[0].count) return result;
            result.push(car.name);
          });
        
        return result.join(", ")
        
    }
}