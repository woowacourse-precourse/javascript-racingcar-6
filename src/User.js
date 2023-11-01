import { MissionUtils } from '@woowacourse/mission-utils';

class User {
  constructor(nameList) {
    this.nameList = nameList;
    this.carsMovingPoint = Array.from(
      { length: this.nameList.length },
      () => 0
    );
  }

  async setRandomValue() {
    this.nameList.forEach((name, index) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      console.log(randomValue); // TODO 디버깅용
      if (randomValue >= 4) {
        this.carsMovingPoint[index] += 1;
      }
    });
  }

  async printWinner() {
    let winnerName = '최종 우승자 : ';
    const maxMovingPointValue = Math.max.apply(null, this.carsMovingPoint);
    console.log(maxMovingPointValue); // TODO 디버깅용
    this.carsMovingPoint.forEach((movingPoint, index) => {
      if (maxMovingPointValue === movingPoint) {
        winnerName += this.nameList[index];
        winnerName += ', ';
      }
    });
    winnerName = winnerName.slice(0, winnerName.length - 2);
    MissionUtils.Console.print(winnerName);
  }
}

export async function inputParticipantCarName() {
  const userInput = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const userList = userInput.replace(/ /g, '').split(',');
  return userList;
}

export async function validParticipantCarName(carNameList) {
  carNameList.forEach((name) => {
    if (name.length > 5 || name.length < 1) {
      throw new Error('[ERROR] 자동차 이름은 1자 ~ 5자 사이를 입력해주세요');
    }
  });
  if (carNameList.length > 5 || carNameList < 1) {
    throw new Error('[ERROR] 참가자는 1팀 ~ 5팀이 있어야 진행이 가능합니다');
  }
}

export async function inputNumberOfAttempts() {
  const userInput = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?(1~20 숫자를 입력해주세요)\n'
  );
  return userInput;
}

export async function validNumberOfAttempts(userInput) {
  if (userInput < 1 || userInput > 20) {
    throw new Error('[ERROR] 시도 횟수는 1 ~ 20 사이로 입력해주세요');
  }
}

export default User;
