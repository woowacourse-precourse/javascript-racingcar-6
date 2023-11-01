import ProgressOutput from "../../view/output/ProgressOutput.js";

const gameInProgress = (keyValue) => {
  keyValue.forEach((value) => {
    const name = Object.keys(value)[0];
    const hyphen = value[name];
    ProgressOutput.gameInProgressPrint(name, hyphen);
  });
};

export default gameInProgress;