import { Console, Random } from "@woowacourse/mission-utils";

function App() {
  this.play = async () => {
    const raceCarNameArr = inputRaceCarName();
    const raceCount = inputRaceCount();
  };

  const inputRaceCarName = async () => {
    const raceCarNameArr = await Console.readLineAsync(
      "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)"
    );
    return raceCarNameArr.split(",");
  };
  const inputRaceCount = async () => {
    const raceCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    return raceCount;
  };
}

export default App;
