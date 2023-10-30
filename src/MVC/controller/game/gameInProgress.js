import Output from "../../view/Output.js";

const gameInProgress = (keyValue) => {
  keyValue.forEach((value) => {
    const name = Object.keys(value)[0];
    const hyphen = value[name];
    Output.gameInProgressPrint(name, hyphen);
  });
};

export default gameInProgress;
