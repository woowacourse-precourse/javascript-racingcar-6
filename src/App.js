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
      let moveForwardArr = new Array(carNum).fill(0);
      for (let i=0; i<carNum; i++) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          moveForwardArr[i] = 1
        }
      }
      return moveForwardArr
    }
    const printCurCarMove = async(carNameArr, curMoveForwardArr) => {
      for (let i=0; i<carNameArr.length; i++){
        const carName = carNameArr[i]
        const curMoveForward = curMoveForwardArr[i]
        await MissionUtils.Console.print(carName+ " : "+ "-".repeat(curMoveForward))
      }
      await MissionUtils.Console.print("\n")
    }
    const printWinners = async(carNameArr, curMoveForwardArr) => {
      const maxMove = Math.max(...curMoveForwardArr);

      let winners = [];

      for (let i=0; i<carNameArr.length; i++) {
        if (maxMove === curMoveForwardArr[i]) {
          winners.push(carNameArr[i])
        }
      }

      await MissionUtils.Console.print("최종 우승자 : "+winners.join(", "))
    }
    const carNameArr = await getCarNameInput();
    await checkValidCarName(carNameArr)
    const trialNum = await getTrialNumInput();
    await checkValidTrialNum(trialNum)

    let curMoveForwardArr = new Array(carNameArr.length).fill(0);
    let i = 0
    while(i< trialNum) {
      const moveForwardArr = await raceStart(carNameArr)
      curMoveForwardArr = curMoveForwardArr.map((value, index) => value + moveForwardArr[index]);
      await printCurCarMove(carNameArr, curMoveForwardArr)
      i += 1
    }

    await printWinners(carNameArr, curMoveForwardArr)
  }
}

export default App;
