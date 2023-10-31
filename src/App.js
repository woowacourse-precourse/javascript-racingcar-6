import inputCarName from "./inputCarName.js";
import inputTryNumber from "./inputTryNumber.js";
import allTryResult from "./allTryResult.js";
import getFinalScore from "./getFinalScore.js";
import getFinalWinner from "./getFinalWinner.js";

class App {
  async play() {
    const carName = await inputCarName();
    const tryNumber = await inputTryNumber();
    let allScore = [];
    for (let i = 0; i < carName.length; i++) {
      allScore.push("");
    }
    allScore = allTryResult(carName, tryNumber, allScore);
    const winnerScoreLength = getFinalScore(allScore);
    getFinalWinner(allScore, winnerScoreLength, carName)
  }
}

export default App;
