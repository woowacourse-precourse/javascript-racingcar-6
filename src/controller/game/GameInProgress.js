import ProgressOutput from "../../view/output/ProgressOutput.js";

class GameInProgress {
  constructor() {
    this.progressOutput = new ProgressOutput();
  }
  progress(keyValue) {
    keyValue.forEach((value) => {
      const name = Object.keys(value)[0];
      const hyphen = value[name];
      this.progressOutput.gameInProgressPrint(name, hyphen);
    });
  }
}
export default GameInProgress;
