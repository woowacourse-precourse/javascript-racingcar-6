import { Random } from '@woowacourse/mission-utils';

class CarGame {
  checkPosition(carMap, attempts) {
    carMap.forEach((_, carName) => {
      carMap.set(carName, this.getRandomNumber(Number(attempts)));
    });
    return carMap;
  }

  getRandomNumber(attempts) {
    let count = 0;
    for (let i = 0; i < attempts; i++) {
      const randomValue = Random.pickNumberInRange(0, 9);
      console.log(randomValue);
      if (randomValue >= 4) {
        count += 1;
      }
    }
    console.log(`count per car: ${count}`);
    return count;
  }
}

export default CarGame;
