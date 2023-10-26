import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {}

  Car(name) {
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

export default App;
