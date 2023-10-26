import { Console, Random } from "@woowacourse/mission-utils";

function App(initialState = {}) {
  this.play = async () => {
    const raceCarNameArr = await inputRaceCarName();
    this.setState(raceCarNameArr);
    console.log(this.state);
    const raceCount = await inputRaceCount();
    raceStart(this.state, raceCount);
    console.log(this.state);
  };

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const inputRaceCarName = async () => {
    const tempRaceCarNameArr = await Console.readLineAsync(
      "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const raceCarNameArr = tempRaceCarNameArr.split(",");
    return raceCarNameArr.map((car) => {
      return { carName: car, goCount: "" };
    });
  };

  const inputRaceCount = async () => {
    const raceCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    return parseInt(raceCount);
  };

  const raceStart = (raceCarNameArr, raceCount) => {
    Console.print("실행결과");
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
}

export default App;
