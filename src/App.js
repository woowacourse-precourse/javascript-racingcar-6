import { Console, Random } from "@woowacourse/mission-utils";
import Car from './Car.js';

const HEADWAY = "-";

async function getInput(text) {  // 사용자로부터 입력받는 함수
  try {
    var userInput = await Console.readLineAsync(text);  // 입력 후 반환
    return userInput;
  } catch (error) { 
    throw new Error("[ERROR] 잘못 된 형식의 입력입니다 !!");
  }
}

function makeCarList(carName) {  // 입력받은 자동차 이름들을 이용해 Car 객체 생성
  let carList = [];

  carName.forEach(element => {
    carList.push(new Car(element));
  });
  
  return carList;
}

function isCarNameValid(carName) {  // carName 배열을 받아 배열의 문자열들이 5자 이하인지 확인
  for(var value of carName) {
    if(value.length >= 5) {
      throw new Error("[ERROR] 자동차의 이름이 5글자 이상입니다 !!");
    }
  }
  return true;
}

function isIntValid(num) {  // 정수인지 판별
  if(num % 1 !== 0){
    throw new Error("[ERROR] 시도할 횟수가 정수가 아닙니다 !!");
  }
  return true;
}

function runCarRace(carList, moveCount) {  // 자동차 이름과 주어진 횟수를 이용해 자동차 경주

  Console.print("\n실행 결과");

  for (var i = 0; i < moveCount; i++){
    for(var value of carList) {  // 자동차마다 경주 시작
      getRandomHead(value, Random.pickNumberInRange(0, 9));
      Console.print(value.getCarName() + " : " + HEADWAY.repeat(value.getHeadCount()));
    }
    Console.print("");
  }
}

function getRandomHead(car, randValue) {
  if (randValue >= 4){  // 랜덤값이 4 이상이면 전진 표시 ("-")
    car.addHeadCount();
    return true;
  }
  return false;
}

function printWinner(carList) {
  var winnerCount = 0;
  var winner = [];

  Console.print(carList);

  for(var value of carList) {  // 가장 높은 headCount 찾기
    if(value.getHeadCount() >= winnerCount){
      winnerCount = value.getHeadCount();
    }
  }

  for(var value of carList) {
    if(value.getHeadCount() === winnerCount){  // 가장 높은 headCount를 가진 자동차들 찾기
      winner.push(value.getCarName());
    }
  }

  return winner;
}

class App { 
  async play() {
    
    var carName = [];
    var carNameStr = await getInput("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    carName = carNameStr.split(',');
    isCarNameValid(carName);
    var carList = makeCarList(carName);  // 자동차 이름 배열과 Car 클래스를 이용해 객체를 리스트로 생성

    var moveCount = await getInput("시도할 횟수는 몇 회인가요?\n");
    isIntValid(moveCount);

    runCarRace(carList, moveCount);
    Console.print("최종 우승자 : " + printWinner(carList));
  }
}

export default App;
export { getRandomHead, printWinner }