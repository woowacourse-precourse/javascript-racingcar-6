import { Console, Random } from '@woowacourse/mission-utils';

class Race {
  generateRandomNumber() {
    const startInclusive = 0;
    const endInclusive = 9;
    let randomNumber = Random.pickNumberInRange(startInclusive, endInclusive);

    return randomNumber >= 4;
  }

  runRace(carArr, carDictionary) {
    carArr.forEach(key => {
      if (this.generateRandomNumber()) {
        carDictionary[key] += 1;
      }
    });
  }

  printRace(carDictionary) {
    Object.entries(carDictionary).forEach(([key, value]) => {
      Console.print(`${key} : ${'-'.repeat(value)}`);
    });
    Console.print('');
  }
}

export default Race;
