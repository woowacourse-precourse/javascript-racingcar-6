const MESSAGES = {
  CAR: '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분)',
  NUM: '시도할 횟수는 몇 회인가요?',
  RESULT: '실행 결과'
};

async function getUserData(message) {
  const userData = await Console.readLineAsync(message);
  return userData;
}

function carToMap(carNames, carMap) {
  carNames.split(',').forEach(name => {
    handling(name.length);
    carMap.set(name, "");
  });
}

function goAndStop() {
  return Random.pickNumberInRange(0, 9) >= 4;
}

function currentMatchResults(carMap) {
  let highestScore = 0;
  carMap.forEach((value, key) => {
    if (goAndStop()) carMap.set(key, value + "-");
    if (highestScore < carMap.get(key).length) highestScore = carMap.get(key).length;
    Console.print(`${key} : ${carMap.get(key)}`);
  });
  Console.print('');
  return highestScore;
}

class App {
  async play() {
    const CAR_NAMES = await getUserData(MESSAGES.CAR);
    const carMap = new Map();
    let highestScore = 0;

    carToMap(CAR_NAMES, carMap);

    const USER_NUMBER = await getUserData(MESSAGES.NUM);
    Console.print('');

    Console.print(MESSAGES.RESULT);
    for (let i = 0; i < USER_NUMBER; i++) {
      highestScore = currentMatchResults(carMap);
    }
  }
}

export default App;
