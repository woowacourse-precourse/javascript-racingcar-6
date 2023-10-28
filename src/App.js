import { Console, Random } from "@woowacourse/mission-utils";
async function input(script) {
  const inputValue = await Console.readLineAsync(script);
  return inputValue;
}

async function getCar() {
  let value = await input(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  value = value.split(",");
  return value;
}
async function getTryNum() {
  const value = await input("시도할 횟수는 몇 회인가요?\n");
  return value;
}
class App {
  async play() {
    const car = await getCar();
    const tryNum = await getTryNum();
    Console.print(car);
    Console.print(tryNum);
  }
}

export default App;

const app = new App();
app.play();
