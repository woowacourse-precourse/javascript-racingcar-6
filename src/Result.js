import { Console } from "@woowacourse/mission-utils";

class Result {
  async start(carsArray) {
    this.getWinner(carsArray);
  }

  getWinner(cars) {
    const maxLength = Math.max(...cars.map((car) => car.forward.length));
    const winnerCarsList = cars.filter((car) => car.forward.length === maxLength);
    const winnerCarString = winnerCarsList.map((car) => car.name).join(", ");

    Console.print(`최종 우승자 : ${winnerCarString}`);
  }
}

export default Result;
