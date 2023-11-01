import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // GET INPUT
    const gameInfo = await getInput();
    const player = gameInfo[0];
    let playCount = gameInfo[1];
    // if playCount == -1 -> type error

    // INIT
    let raceStatus = gameInit(player);

    MissionUtils.Console.print("실행 결과");

    // play game
    while(playCount > 0) {
      raceLap(player, raceStatus);
      playCount--;
    }

    // 최종 우승자 PRINT
    const maxValuesNames = findMaxValueIndices(player, raceStatus);
    MissionUtils.Console.print("최종 우승자 : " + maxValuesNames);
  }
}

async function getInput() {
  MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
  const carName =  await MissionUtils.Console.readLineAsync('');
  const player = carName.split(",");
  MissionUtils.Console.print("시도할 횟수는 몇 회인가요?")
  let playCount =  await MissionUtils.Console.readLineAsync('');
  MissionUtils.Console.print(playCount);

  return [player, playCount];
}

function gameInit(player) {
  let raceStatus = [];
  let i = 0;
  for (i = 0; i < player.length; i++) {
    raceStatus.push(0);
  }

  return raceStatus;
}

function raceLap(player, raceStatus) {
  const numOfPlayer = player.length;
  let racer = 0;
  while(racer < numOfPlayer) {
    const generateMove = MissionUtils.Random.pickNumberInRange(0, 9);
    if (generateMove > 3) {
      raceStatus[racer] += 1;
    }
    // 중간 상황 print
    MissionUtils.Console.print(player[racer] + " : " + "-".repeat(raceStatus[racer]));
    //
    racer ++;
  }
}

function findMaxValueIndices(names, values) {
  const max = Math.max(...values); 
  const indices = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] === max) {
        indices.push(i); 
    }
  }
  const result = indices.map(index => names[index]);
  const winner = result.map((member) => member).join(' ,')
  return winner;
}



export default App;
