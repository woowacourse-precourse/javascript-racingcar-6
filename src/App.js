import {Console, Random} from '@woowacourse/mission-utils';
class App {
  async play() {

    let userInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

    const CAR_NAME_ARRAY = userInput.split(',');
    CAR_NAME_ARRAY.forEach(car => {
      if(car.length > 5 || car.length < 1)  throw new Error(`[ERROR] (${car})은 1~5글자 길이가 아닙니다.`)
    });
    const CAR = CAR_NAME_ARRAY.map(name=>({name, distance: 0}));

    userInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    const COUNT = Number(userInput);
    if(isNaN(COUNT) || COUNT > 9 || COUNT < 0)  throw new Error('[ERROR] 잘못된 횟수를 입력했습니다. 0부터 9까지의 정수를 입력해 주세요.')

    Console.print('\n실행 결과');

    const RACED_CAR = carRace(CAR, COUNT);
    const WINNERS = findWinner(RACED_CAR);

    Console.print(WINNERS);

  }
}

export default App;

export const carRace = (CAR, COUNT) => {
  for(let i = 0; i<COUNT; i++){
    CAR.forEach((car)=>{
      const RANDOM_NUMBER = Random.pickNumberInRange(0, 9)
      car.distance = RANDOM_NUMBER > 3 ? car.distance + 1 : car.distance;
      Console.print(`${car.name} : ${'-'.repeat(car.distance)}`)
    })
    Console.print('');
  }
  return CAR;
}

export const findWinner = (RACED_CAR) => {
  const maxDistance = Math.max(...RACED_CAR.map(object=>object.distance));
  const winnerObject = RACED_CAR.filter(object => object.distance === maxDistance);
  const winnerArray = winnerObject.map(object=>object.name);

  return winnerArray.join(', ');
}