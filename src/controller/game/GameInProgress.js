import progressOutput from "../../view/output/progressOutput.js";

class GameInProgress { 
  progress(keyValue) {
    keyValue.forEach((value) => {
      const name = Object.keys(value)[0];
      const hyphen = value[name];
      progressOutput.gameInProgressPrint(name, hyphen);
    });
  }
}
export default GameInProgress;
