import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const repeatNumber = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    MissionUtils.Console.print("실행 결과");
    const carNameArray = carNames.split(',');
    const carObjects = carNameArray.map(name => ({ [name.trim()]: 3 }));

    for( let i = 0 ; i < repeatNumber ; i++){ // 시도 횟수
      for( let j = 0 ; j < carObjects.length ; j++ ){ // 자동차 수
        const ResultNumber = this.repeatDash(carObjects[j]);
        MissionUtils.Console.print(carNameArray[j] + " : " + ResultNumber);
      }
    }
    let winCarArr = [];
    let maxValue = 0;

    for (const carObject of carObjects) {
      for (const carName in carObject) {
        const advanceValue = carObject[carName];
        if (advanceValue > maxValue) {
          winCarArr.push(carName);
          maxValue = advanceValue;
        } else if (advanceValue === maxValue && !winCarArr.includes(carName)) {
          winCarArr.push(` ${carName}`);
        }
      }
    }
    MissionUtils.Console.print("최종 우승자 : " + winCarArr)
  }
  repeatDash(carObject) {
    let ResultNumber = '';
    for (const key in carObject) {
      for( let i = 0 ; i < carObject[key] ; i++ ){
        ResultNumber = ResultNumber.concat('-');
      }
    }
    return ResultNumber;
  }
}

export default App;
