import { MissionUtils } from "@woowacourse/mission-utils";

async function getNameInput(){
  const inputName = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  const nameArray = inputName.split(",");
  checkNameValidation(nameArray);  
  return nameArray;
}

async function getNumberInput(){
  const inputCount = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  checkNumberValidation(inputCount);
  return Number(inputCount);
}

function checkNameValidation(nameArray){
  if(nameArray.length <= 1){
    throw new Error("[ERROR] 2대 이상의 자동차 이름을 입력해 주세요.");
  }

  nameArray.forEach((str) => {
    if(str.length > 5){
      throw new Error("[ERROR] 5자 이하의 이름을 입력해 주세요.");
    }
  });

  const set = new Set(nameArray);
  if(set.size != nameArray.length){
    throw new Error("[ERROR] 서로 다른 이름을 입력해 주세요.");
  }
}

function checkNumberValidation(count){
  const number = Number(count);
  if(isNaN(number)){
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
  }
  if(number <= 0){
    throw new Error("[ERROR] 1 이상의 숫자를 입력해 주세요.");
  }
}

class App {
  async play() {
    const name = await getNameInput();
    const count = await getNumberInput();
  }
}

export default App;
