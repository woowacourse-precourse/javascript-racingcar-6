import { Console,Random } from "@woowacourse/mission-utils";

// 출력할 문구들
const MESSAGES = {
  CAR: '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분)',
  NUM: '시도할 횟수는 몇 회인가요?',
  RESULT: '실행 결과'
};

// 사용자 입력 추출
async function getUserData(message) {
  const userData = await Console.readLineAsync(message);
  return userData;
}

// 자동차 이름 map 자료형 변환
function carToMap(carNames, carMap) {
  carNames.split(',').forEach(name => {
    handling(name.length);
    carMap.set(name, "");
  });
}

// 자동차가 전진하는지 멈추는지 결정
function goAndStop() {
  return Random.pickNumberInRange(0, 9) >= 4;
}

// 전진하는 자동차 기록
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

// 정답 추출
function winners(carMap, highestScore) {
  const carWin = [];
  carMap.forEach((value, key) => {
    if (value.length === highestScore) carWin.push(key);
  });
  Console.print(`최종 우승자 : ${carWin.join(",")}`);
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
      
    winners(carMap, highestScore);
  }
}

export default App;
