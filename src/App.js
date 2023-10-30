import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNameArray = carNameInput.split(",");
   

    const carProgress = new Array(carNameArray.length).fill(0);
    const playRound = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const result = playRacing(playRound, carProgress, carNameArray);
  }
}

function playRacing(playRound, carProgress, carNameArray) {
  for (let round = 0; round < playRound; round++) {
    for (let i = 0; i < carProgress.length; i++) {
      const value = randomValue();
      if (value >= 4) {
        carProgress[i]++;
      }
    }

    printResults(carNameArray, carProgress);
  }
  // 모든 라운드가 끝난 후 우승자 결정
  const finalWinners = finalWinner(carNameArray, carProgress);
  // 최종 우승자 출력
  printWinner(carNameArray, finalWinners);

  return carProgress;
}

function randomValue() {
  return Math.floor(Math.random() * 10);
}

function printResults(names, progress) {
  for (let i = 0; i < names.length; i++) {
    let progressString = "-".repeat(progress[i]);
    Console.print(`${names[i]} : ${progressString}`);
  }
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

function printWinner(names, winners) {
  const maxProgress = winners[0].progress;
  const result = winners.filter((winner) => winner.progress === maxProgress);
  const resultString = result.map((winner) => `${winner.name}`).join(", ");

  Console.print(`최종 우승자: ${resultString}`);
}

export default App;
