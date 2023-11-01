const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function moveCar() {
  return Math.floor(Math.random() * 10) >= 4;
}

async function raceCars(carNames, numTries) {
  const cars = carNames.split(",").map((name) => ({ name, position: 0 }));

  for (let i = 0; i < numTries; i++) {
    console.log(`\n시도 ${i + 1}`);

    for (const car of cars) {
      const move = moveCar() ? "-" : "";
      car.position += move;
      console.log(`${car.name} : ${move}`);
    }

    await sleep(1000);
  }

  const maxPosition = Math.max(...cars.map((car) => car.position.length));
  const winners = cars.filter((car) => car.position.length === maxPosition);

  return winners.map((car) => car.name).join(", ");
}

(async () => {
  try {
    const carNames = await getUserInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const numTries = parseInt(
      await getUserInput("시도할 횟수는 몇 회인가요?\n")
    );

    if (!carNames || !numTries) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    const winners = await raceCars(carNames, numTries);

    console.log("\n최종 우승자:", winners);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
})();
