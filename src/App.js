import { Random, Console } from '@woowacourse/mission-utils';
class App {
  #racingcar;

  constructor() {}
  async play() {
    //사용자에게 입력받는다.
    const carList = await inputCars();
    //실행결과를 보여준다.
    console.log(carList);
  }
}
const MESSAGE = Object.freeze({
  inputCarList: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`,
  error: '[ERROR]',
});

async function inputCars() {
  try {
    const carList = await Console.readLineAsync(MESSAGE.inputCarList);
    //에러처리
    return carList;
  } catch (errorCase) {
    throw new Error(`${MESSAGE.error} ${errorCase}`);
  }
}
export default App;
