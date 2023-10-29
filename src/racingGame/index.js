//import { MissionUtils } from "@woowacourse/mission-utils";



import Input from "./Input.js";
// import Racing from "./Racing.js";
// import Result from "./Result.js";

class RacingGame{
  async gameStart(){
    const input = new Input();
    // const racing = new Racing();
    // const result = new Result();

    const carNameArray = await input.getCarName();
    //const racingNumber = await input.getRacingNumber();
  }
}

export default RacingGame;