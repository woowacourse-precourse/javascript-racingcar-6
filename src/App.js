import {Random, Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    const carName = await getCarInput();
    console.log(carName);
    const tryNum = await getTryNumInput();
    console.log(tryNum);
  }
}

export default App;

const app = new App();
app.play()

async function getCarInput(){  
  let carNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  return carNameInput;
}

async function getTryNumInput(){
  let tryNumInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return tryNumInput;
}

function ParsingAndValidate(){

}

function getRandom(){

}

function getCheck(){

}