import { Console, Random } from '@woowacourse/mission-utils';
import { TEXT, ERROR_MESSAGE, CONSTANT } from './constants.js';

class User {
  constructor(nameList) {
    this.nameList = nameList;
    this.carsMovingPoint = Array.from(
      { length: this.nameList.length },
      () => 0,
    );
  }

  async setRandomValue() {
    this.nameList.forEach((name, index) => {
      const randomValue = Random.pickNumberInRange(0, 9);
      if (randomValue >= CONSTANT.MOVING_FORWARD) {
        this.carsMovingPoint[index] += 1;
      }
    });
  }

  printOutput(output, movingPoint, idx) {
    let forOutput = output;
    let forIdx = idx;
    while (movingPoint > forIdx) {
      forOutput += '-';
      forIdx += 1;
    }
    return forOutput;
  }

  async playRacingGame(userInput) {
    let indexOfuserList = 0;
    while (userInput > indexOfuserList) {
      this.setRandomValue();
      this.carsMovingPoint.forEach((movingPoint, index) => {
        let output = this.nameList[index];
        const idx = 0;
        output += ' : ';
        output = this.printOutput(output, movingPoint, idx);
        Console.print(`${output}`);
      });
      Console.print('');
      indexOfuserList += 1;
    }
  }

  async printWinner() {
    let winnerName = '최종 우승자 : ';
    const maxMovingPointValue = Math.max.apply(null, this.carsMovingPoint);
    this.carsMovingPoint.forEach((movingPoint, index) => {
      if (maxMovingPointValue === movingPoint) {
        winnerName += this.nameList[index];
        winnerName += ', ';
      }
    });
    winnerName = winnerName.slice(0, winnerName.length - 2);
    Console.print(winnerName);
  }
}

export async function inputParticipantCarName() {
  const userInput = await Console.readLineAsync(
    TEXT.INPUT_PARTICIPANT_CAR_NAME,
  );
  const userList = userInput.replace(/ /g, '').split(',');
  return userList;
}

export async function validParticipantCarName(carNameList) {
  carNameList.forEach((name) => {
    if (
      name.length > CONSTANT.MAX_NAME_LENGTH
      || name.length < CONSTANT.MIN_NAME_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.PARTICIPANT_CAR_NAME_ERROR);
    }
  });
  if (
    carNameList.length > CONSTANT.MAX_PARTICIPANT
    || carNameList < CONSTANT.MIN_PARTICIPANT
  ) {
    throw new Error(ERROR_MESSAGE.TOTAL_PARTICIPANT_ERROR);
  }
}

export async function inputNumberOfAttempts() {
  const userInput = await Console.readLineAsync(TEXT.INPUT_NUMBER_OF_ATTEMPTS);
  return userInput;
}

export async function validNumberOfAttempts(userInput) {
  if (userInput < CONSTANT.MIN_ATTEMPTS || userInput > CONSTANT.MAX_ATTEMPTS) {
    throw new Error(ERROR_MESSAGE.NUMBER_OF_ATTEMPTS_ERROR);
  }
}

export default User;
