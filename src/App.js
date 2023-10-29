import { Console, Random } from "@woowacourse/mission-utils";

async function getInput(text) {  // 사용자로부터 입력받는 함수
  try {
    var userInput = await Console.readLineAsync(text);  // 입력 후 반환
    return userInput;
  } catch (error) { 
    throw new Error("[ERROR] 잘못 된 형식의 입력입니다 !!");
  }
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

class App { 
  async play() {
    
    var carName = [];
    var carNameStr = await getInput("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    carName = carNameStr.split(',');
    isCarNameValid(carName);

    var moveCount = await getInput("시도할 횟수는 몇 회인가요?\n");
    isIntValid(moveCount);
  }
}

export default App;
