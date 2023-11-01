import { Random } from "@woowacourse/mission-utils";

class Racing {

  moveRacingCar(distanceList, index) {
    if (Random.pickNumberInRange(1, 9) >= 4) {
      return ++distanceList[index];
    }
    return distanceList[index];
  }

  updateRacingWinner(racingCarList, distanceList) {
    const maxDistance = Math.max(...distanceList);
    const winnerCarList = racingCarList.reduce((acc, carName, index) => {
      if (distanceList[index] === maxDistance) {
        acc.push(carName);
      }
      return acc;
    }, []);
    return winnerCarList;
  }
}

export default Racing;
