import * as MissionUtils from "@woowacourse/mission-utils";
class App {
  async play() {
    const getCarNameInput = async() => {
      const carName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')
      return carName.split(',')
    };
    const checkValidCarName = async(carNameArr) => {
      for (let i=0; i<carNameArr.length; i++) {
        if (carNameArr[i].length > 5) {
          throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.")
        }
      }
    }
    const carNameArr = await getCarNameInput();
    checkValidCarName(carNameArr)
  }
}

export default App;
