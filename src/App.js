import { Console, Random } from "@woowacourse/mission-utils";

function App() {
  this.play = async () => {
    const raceCarNameArr = await inputRaceCarName();
    const raceCount = await inputRaceCount();

    raceStart(raceCarNameArr, raceCount);
  };

  const inputRaceCarName = async () => {
    const raceCarNameArr = await Console.readLineAsync(
      "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return raceCarNameArr.split(",");
  };
  const inputRaceCount = async () => {
    const raceCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    return raceCount;
  };
  const raceStart = (raceCarNameArr, raceCount) => {
    Console.print("실행결과");
    let count = 1;
    while (count > raceCount) {
      raceCarGoOrStop(raceCarNameArr, raceCount);
      count++;
    }
  };
  const raceCarGoOrStop = (raceCarNameArr, raceCount) => {
    //...
  };
}

export default App;
