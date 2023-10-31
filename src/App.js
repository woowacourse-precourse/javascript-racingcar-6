// import { RacingGame } from "./game/index.js";

import { Console, Random } from "@woowacourse/mission-utils";

async function input(message) {
  return Console.readLineAsync(message);
}

function print(message) {
  Console.print(message);
}

function makeCarsArray(message) {
  const CARS = message.split(",");

  validCars(CARS);

  return CARS;
}


export function validCars(carsArray) {
  const CARS_SET = new Set(carsArray);
  if(carsArray?.length !== CARS_SET?.size) throw new Error(`[ERROR] ${ERROR_MESSAGE.OVERLAP_NAME}`);

  CARS_SET.forEach((car) => {
    if (car === "") throw new Error(`[ERROR] ${ERROR_MESSAGE.EMPTY_NAME}`);

    else if (car?.length > 5) throw new Error(`[ERROR] ${ERROR_MESSAGE.MORE5_NAME}`);

    // else if (car.trim() !== car) throw new Error(`[ERROR] ${ERROR_MESSAGE.TRIM_EMPTY_NAME}`);
  });

}
export const NUMBER_RANGE = {
  MIN: 0,
  MAX: 9,
};

export const INPUT_MESSAGE = {
  INPUT_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?",
};

export const OUTPUT_MESSAGE = {
  RESULT: "실행 결과",
  FINAL_WINNER: "최종 우승자 : ",
};

export const ERROR_MESSAGE = {
  NOT_NUMBER: "숫자를 입력해주세요.",
  EMPTY_NAME: "차 이름을 입력해주세요.",
  MORE5_NAME: "차 이름은 5글자 이하이어야 합니다.",
  TRIM_EMPTY_NAME: "이름 앞뒤에 공백이 포함되어 있습니다.",
  OVERLAP_NAME: "중복되는 차 이름이 존재합니다.",
  DOWN1_COUNT: "1이상 숫자를 입력해주세요.",
};


export function vaildTryCount(count){
  if(isNaN(count)) throw new Error(`[ERROR] ${ERROR_MESSAGE.NOT_NUMBER}`);
  if(count <= 0) throw new Error(`[ERROR] ${ERROR_MESSAGE.DOWN1_COUNT}`);
  return count;
}

export async function getRandomNumber() {
  return Random.pickNumberInRange(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
}

export async function isMove() {
  const RANDOM = await getRandomNumber();
  return RANDOM >= 4 ? true : false;
}

class RacingGame {
  constructor() {
    this.cars = {};
  }

  async initCars() {
    const NAME = await input(INPUT_MESSAGE.INPUT_NAME);
    const CARS_ARRAY = await makeCarsArray(NAME);

    CARS_ARRAY.forEach((car) => {
      this.cars[car] = 0;
    });
  }

  async initTryCount() {
    const COUNT = await input(INPUT_MESSAGE.TRY_COUNT);
    const VAILD_COUNT = vaildTryCount(+COUNT);
    return VAILD_COUNT;
  }

  async go(TRY_COUNT) {
    let num = 0;
    while(TRY_COUNT > num) {
      await this.moveCars();
      await Console.print("");
      num++;
    }
  }
  async start() {
    await this.initCars();
    const TRY_COUNT = await this.initTryCount();

    await this.go(TRY_COUNT);

    await this.printWinner();
  }

  async moveCars() {
    for (let car in this.cars) {
      await this.moveCar(car);
      await this.printResultMove(car);
    }
  }

  async moveCar(car) {
    const MOVE = await isMove();
    if (MOVE) {
      this.cars[car] += 1;
    }
  }

  async printResultMove(car) {
    let progress = "";
    for (let i = 0; i < this.cars[car]; i++) {
      progress += "-";
    }

    if (progress !== "") await Console.print(`${car} : ${progress}`);
  }

  async printWinner() {
    const HIGHEST_SCORE = Object.values(this.cars).sort((a, b) => b - a)[0];

    let winner = [];
    for (let car in this.cars) {
      if (this.cars[car] === HIGHEST_SCORE) winner.push(car);
    }

    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}


class App {
  async play() {
    const racing = new RacingGame();

    await racing.start();
  }
}

export default App;
