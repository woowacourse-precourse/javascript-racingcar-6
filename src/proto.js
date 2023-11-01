import { MissionUtils } from '@woowacourse/mission-utils';

const excute = async function excuteFunctionForPrototype() {
  // const cars = await MissionUtils.Console.readLineAsync(
  //   '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  // );
  const cars = 'woni,fubao,yeongyeong';

  // const rounds = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  const rounds = 5;

  MissionUtils.Console.print('\n실행 결과');
  const carsArray = cars.split(',');

  const scoreObjects = {};

  // 000 객체 만들기
  carsArray.forEach((carName, index) => {
    scoreObjects[`${carName}`] = 0;
  });

  for (let i = 0; i < rounds; i++) {
    randPlus(carsArray, scoreObjects);
    doRound(carsArray, scoreObjects);
    MissionUtils.Console.print('\n');
  }

  const winnersArray = getWinners(carsArray, scoreObjects);
  const winnersString = winnersArray.join(', ');
  MissionUtils.Console.print(`최종 우승자 : ${winnersString}`);
};

excute();

function randPlus(carsArray, scoreObjects) {
  // 랜덤으로 점수 + 1
  carsArray.forEach(carName => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      scoreObjects[`${carName}`] += 1;
    }
  });
}

function doRound(carsArray, scoreObjects) {
  // 라운드 진행 및 결과 출력
  carsArray.forEach((car, index) => {
    const scoreCount = '-'.repeat(scoreObjects[`${car}`]);
    MissionUtils.Console.print(`${car} : ${scoreCount}`);
  });
}

function getWinners(carsArray, scoreObjects) {
  let winners = [carsArray[0]];
  for (let i = 0; i < carsArray.length - 1; i++) {
    const oneCar = winners[0];
    const anotherCar = carsArray[i + 1];
    if (scoreObjects[`${oneCar}`] < scoreObjects[`${anotherCar}`]) {
      winners = [anotherCar];
    }
    if (scoreObjects[`${oneCar}`] == scoreObjects[`${anotherCar}`]) {
      winners.push(anotherCar);
    }
  }
  return winners;
}
