import { Random,Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameArray = carNameInput.split(",");

    // 이름 예외처리
    for (const name of carNameArray) {
      if (name.length >= 5) {
        throw new Error("[ERROR] 이름이 5자 이상입니다.");
      }
    }

    // 라운드 예외처리
    let playRound = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    playRound = parseInt(playRound);

    if (isNaN(playRound) || playRound <= 0) {
      throw new Error("[ERROR] 올바른 숫자를 입력하세요.");
    }

    const carProgress = new Array(carNameArray.length).fill(0);
    const result = playRacing(playRound, carProgress, carNameArray);
  }
}

// 레이싱 시작 함수
function playRacing(playRound, carProgress, carNameArray) {
  for (let round = 0; round < playRound; round++) {
    tryForward(carProgress);
    printResults(carNameArray, carProgress);
  }

  // 모든 라운드가 끝난 후 우승자 결정
  const finalWinners = finalWinner(carNameArray, carProgress);

  // 최종 우승자 출력
  printWinner(finalWinners);
  return carProgress;
}

function tryForward(carProgress) {
  for (let i = 0; i < carProgress.length; i++) {
    const value = randomValue();
    if (value >= 4) {
      carProgress[i]++;
    }
  }
}

function randomValue() {
  return Random.pickNumberInRange(0,9);
}

function printResults(names, progress) {
  for (let i = 0; i < names.length; i++) {
    let progressString = "-".repeat(progress[i]);
    Console.print(`${names[i]} : ${progressString}`);
  }
  Console.print("\n");
}

function finalWinner(name, progress) {
  const maxProgress = Math.max(...progress);
  const winners = [];

  for (let i = 0; i < name.length; i++) {
    if (progress[i] === maxProgress) {
      winners.push({ name: name[i], progress: progress[i] });
    }
  }

  return winners;
}

function printWinner(winners) {
  const maxProgress = winners[0].progress;
  const result = winners.filter((winner) => winner.progress === maxProgress);
  const resultString = result.map((winner) => `${winner.name}`).join(", ");
  Console.print(`최종 우승자 : ${resultString}`);
}

export { playRacing, finalWinner,printWinner,printResults,tryForward };
export default App;
