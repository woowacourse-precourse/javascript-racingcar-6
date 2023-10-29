import { Console, Random } from "@woowacourse/mission-utils";
import { Message } from "./env/Message.js";
import Validation from "./Validation.js";

function App(initialState = {}) {
  this.play = async () => {
    const raceCarNameArr = await inputRaceCarName();
    this.setState(raceCarNameArr);

    const raceCount = await inputRaceCount();
    raceStart(raceCount);
    const winnerArr = raceWinner();
    winnerPrint(winnerArr);
  };

  const validation = new Validation();

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const inputRaceCarName = async () => {
    const tempRaceCarNameArr = await Console.readLineAsync(Message.START);
    const raceCarNameArr = tempRaceCarNameArr.split(",");

    validation.InputCarNameLengthValidation(raceCarNameArr);
    validation.InputValueDuplicatedValidation(
      raceCarNameArr,
      raceCarNameArr.length
    );

    return raceCarNameArr.map((car) => {
      return { carName: car, goCount: "" };
    });
  };

  const inputRaceCount = async () => {
    const raceCount = await Console.readLineAsync(Message.COUNT_INPUT);

    validation.InputValueTypeOfValidation(raceCount);

    return parseInt(raceCount);
  };

  const raceStart = (raceCount) => {
    Console.print(Message.RESULT_MESSAGE);
    let count = 1;
    while (count <= raceCount) {
      raceCarGoOrStop();
      Console.print("\n");
      count++;
    }
  };

  const raceCarGoOrStop = () => {
    this.state.forEach((car) => {
      const { carName, goCount } = car;
      checkGoCount(carName, goCount);
    });

    this.state.forEach((car) => {
      const { carName, goCount } = car;
      Console.print(`${carName} : ${goCount} `);
    });
  };

  const checkGoCount = (carName, goCount) => {
    const checkRandomCount = Random.pickNumberInRange(0, 9);
    if (checkRandomCount >= 4) {
      goCount += "-";
      this.setState(findCarName(carName, goCount));
    }
  };
  const findCarName = (carName, goCount) => {
    return this.state.map((item) =>
      item.carName === carName ? { ...item, goCount: goCount } : item
    );
  };
  const raceWinner = () => {
    let maxCount = 0;
    for (let i = 0; i < this.state.length; i++) {
      maxCount = Math.max(this.state[i].goCount.length, maxCount);
    }
    const winnerObj = this.state.filter((winner) => {
      return winner.goCount.length === maxCount;
    });
    return winnerObj.map((winner) => {
      return winner.carName;
    });
  };
  const winnerPrint = (winnerArr) => {
    Console.print(Message.WINNER_MESSAGE + `${winnerArr.join(", ")}`);
  };
}

export default App;
