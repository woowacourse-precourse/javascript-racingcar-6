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
    const getTrialNumInput = async() => {
      const trialNum = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
      return trialNum
    }
    const checkValidTrialNum = async(trialNum) => {
      if (isNaN(trialNum)) {
        throw new Error("[ERROR] 숫자가 아닙니다.")
      }
    }
    const raceStart = async(carNameArr) => {
      const carNum = carNameArr.length
      let moveForwardArr = [0]*(carNum)
      for (let i=0; i<carNum; i++) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          moveForwardArr[i] = 1
        }
      }
      return moveForwardArr
    }
    const carNameArr = await getCarNameInput();
    await checkValidCarName(carNameArr)
    const trialNum = await getTrialNumInput();
    await checkValidTrialNum(trialNum)
  }
}

export default App;
