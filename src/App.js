import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {}

  

  async inputCarNames() {
    const carNameInput = await Console.readLineAsync(Message.askCarName);
    if(carNameInput.length === 0) throw new Error(Message.error.blank);
    const cars = [...new Set(carNameInput.split(',').map(String))];
    for(let i = 0; i < cars.length; i++) {
      if(cars[i].length > 5) throw new Error(Message.error.overFiveCharacters);
      if(cars[i].length === 0) throw new Error(Message.error.sameCarName);
      if(cars.length < 2) throw new Error(Message.error.moreThanTwoCars);
    }
    return this.constructCars(cars);
  }

  constructCars(array) {
    for(let i = 0; i < array.length; i++) {
      array[i] = new Car(array[i]);
    }
  }

  async inputTryTimes() {
    const times = await Console.readLineAsync(Message.askGameRounds);
    if(isNaN(times)) throw new Error(Message.askTryTimes);
    return times;
  }
}

class Car {
  constructor(name){
    this.name = name;
    this.randomNumber;
    this.pickRandomNumber = function(){
    this.randomNumber = Random.pickNumberInRange(0, 9);
    }
    this.moveNumber;
    this.addMoveNumber = function(){
    if(this.randomNumber >= 4) this.moveNumber++;
    }
  }
}

const Message = Object.freeze({
  askCarName : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  askTryTimes : '시도할 횟수는 몇 회인가요?\n',

  error : {
    blank : '[ERROR] 아무것도 입력되지 않았습니다.',
    overFiveCharacters : '[ERROR] 자동차 이름은 5글자 이하로 설정하세요.',
    zeroCharacter : '[ERROR] 자동차 이름을 1글자 이상 5글자 이하로 설정하세요.',
    moreThanTwoCars : '[ERROR] 2개 이상의 자동차 이름을 입력하세요.',
    notNumber : '[ERROR] 시도 횟수를 입력하세요.'


  }
});

const app = new App();
app.inputCarNames();

export default App;
