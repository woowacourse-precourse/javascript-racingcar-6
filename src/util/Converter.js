import { GAME_RULE } from "../constants/Constants.js";

class Converter {
  static scoreRule(number) {
    if (number < GAME_RULE.movingStandard) {
      return GAME_RULE.stop;
    }
    if (number >= GAME_RULE.movingStandard) {
      return GAME_RULE.movingForward;
    }
  }

  //[3,7,9] -> [0,1,1]
  static scoreFilter(randomArray) {
    return randomArray.map((randomNumber) => this.scoreRule(randomNumber));
  }

  //[3,7,9] -> [0,1,1] -> ['','-','-']
  static traceFilter(randomArray) {
    const scoreArray = this.scoreFilter(randomArray);
    return scoreArray.map((score) => ''.padStart(score, GAME_RULE.roadTrace));
  }
}

export default Converter;
