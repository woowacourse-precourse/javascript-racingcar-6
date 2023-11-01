import { Console } from "@woowacourse/mission-utils";

const carObjects = [];

function validateName(name) {
  if (name.length > 5)
    throw new Error('[ERROR] 자동차 이름은 5자 이하로 적어주세요')
  if (name.length <= 0)
    throw new Error('[ERROR] 자동차 이름은 1글자 이상 적어주세요')
  carObjects.forEach((car) => {
    if (car.name === name)
      throw new Error('[ERROR] 중복된 이름은 추가할 수 없습니다')
  })
}

function validateRoundNumber(round) {
  if (Number.isNaN(round))
    throw new Error('[ERROR]숫자만 입력할 수 있습니다.')
  if (round <= 0 || round > 10000000)
    throw new Error('[ERROR] 1 이상 10000000이하의 숫자만 입력할 수 있습니다.')
}

export default async function gameStart() {
  const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  cars.replace(/ /g, '').split(',').forEach((value) => {
    validateName(value);
    const car = {
      name: value,
      currentLength: 0,
      line: '',
      add: function add() {
        this.currentLength += 1;
        this.line += '-';
      }
    }
    carObjects.push(car);
  })
  const round = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
  validateRoundNumber(round);
  Console.print(carObjects);
}