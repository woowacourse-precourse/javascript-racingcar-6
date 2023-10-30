import inputCarName from "../functions/InputCarName.js";
import inputTryRacing from "../functions/InputTryRacing.js";
import carAdvance from "../functions/CarAdvance.js";
import { Console } from "@woowacourse/mission-utils";
import printCarAdvanceState from "../functions/PrintCarAdvanceState.js";
import printWinner from "../functions/PrintWinner.js";

class App {
  constructor() {
    this.carName=[];
    this.tryRacing=0;
    this.carAdvanceState=[];
  }

  set carName(carName) {
    this._carName = carName;
  }

  set tryRacing(tryRacing) {
    this._tryRacing = tryRacing;
  }

  set carAdvanceState(carAdvanceState) {
    this._carAdvanceState = carAdvanceState;
  }
  
  get carAdvanceState(){
    return this._carAdvanceState;
  }

  get carName() {
    return this._carName;
  }

  get tryRacing() {
    return this._tryRacing;
  }

  async makeCarAdvanceStateZero() {
    let zeroArr = [];

    for(let car in this.carName){
      zeroArr.push(0);
    }

    this.carAdvanceState = zeroArr;
  }

  async play() {
    this.carName = await inputCarName();
    this.tryRacing = await inputTryRacing();
    await this.makeCarAdvanceStateZero();

    Console.print('\n실행 결과');

    for(let tryCount = 0; tryCount < this.tryRacing; tryCount++) {
      this.carAdvanceState = await carAdvance(this.carAdvanceState);  
      printCarAdvanceState(this.carName, this.carAdvanceState);
    }

    await printWinner(this.carName, this.carAdvanceState);
  }
}

export default App;
