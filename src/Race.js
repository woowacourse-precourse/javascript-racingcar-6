import App from "./App.js";
import * as MissionUtils from "@woowacourse/mission-utils";



export default function Race() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if(number >= 4) {
      return "-";
    }
    else return "";
}
  
