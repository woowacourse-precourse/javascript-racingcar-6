import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carStorage = [];

    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const usersInputValueForName = await Console.readLineAsync("");
    validateUsersInputValue(usersInputValueForName, carStorage);

    Console.print("시도할 횟수는 몇 회인가요?");
    const numberOfMatches = await Console.readLineAsync("");
    if (isNaN(numberOfMatches)) throw new Error("[ERROR] 숫자를 입력해주세요.");

    const keysOfPerson = Object.keys(carStorage);

    let count = 0;

    while (count < numberOfMatches) {
      if (count == 0) Console.print("\n실행 결과");

      count++;
      keysOfPerson?.map(async (playerName) => await racing(playerName, carStorage));

      Console.print("");
    }

    const winners = await chooseWinner(keysOfPerson, carStorage);
    Console.print(`최종 우승자 : ${winners?.join(", ")}`);
  }
}

const validateUsersInputValue = (usersInputValueForName, carStorage) => {
  usersInputValueForName.split(",").map((playerName) => {
    const trimName = playerName.trim();
    if (trimName.length > 6) throw new Error("[ERROR] 이름은 다섯글자를 넘을 수 없습니다.");
    else if (playerName in carStorage) throw new Error("[ERROR] 이름은 중복될 수 없습니다.");
    else carStorage[trimName] = "";
  });
};

const racing = async (playerName, carStorage) => {
  const isGo = Random.pickNumberInRange(0, 9) >= 4;
  if (isGo) carStorage[playerName] += "-";
  Console.print(`${playerName} : ${carStorage[playerName]}`);
};

const chooseWinner = async (keysOfPerson, carStorage) => {
  let winners = [];
  let distanceArr = [];

  keysOfPerson.map((playerName) => distanceArr.push(carStorage[playerName].length));

  const maxValue = Math.max.apply(null, distanceArr);
  distanceArr.map((distance, i) => distance == maxValue && winners.push(keysOfPerson[i]));

  return winners;
};

export default App;
