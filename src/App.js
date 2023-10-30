import { ERROR_MESSAGE } from "./constant/errorMessage";
import { GAME_MESSAGE } from "./constant/gameMessage";
import { randomNumGenerator } from "./utils/RandomNumGenerator";
import { messagePrinter } from "./utils/messagePrinter";
class App {
  async play() {
    const getCarNameInput = async() => {
      const carName = await messagePrinter.inputPrint(GAME_MESSAGE.get_car_name)
      return carName.split(',')
    };
    const checkValidCarName = async(carNameArr) => {
      for (let i=0; i<carNameArr.length; i++) {
        if (carNameArr[i].length > 5 || carNameArr[i].length ===0) {
          messagePrinter.errorPrint(ERROR_MESSAGE.more_than_five_letters)
        }
      }
    }
    const getTrialNumInput = async() => {
      const trialNum = await messagePrinter.inputPrint(GAME_MESSAGE.get_trial_num)
      return trialNum
    }
    const checkValidTrialNum = async(trialNum) => {
      if (isNaN(trialNum)) {
        messagePrinter.errorPrint(ERROR_MESSAGE.not_number)
      }
    }
    const raceStart = async(carNameArr) => {
      const carNum = carNameArr.length
      let moveForwardArr = new Array(carNum).fill(0);
      for (let i=0; i<carNum; i++) {
        const randomNum = randomNumGenerator();
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
        await messagePrinter.outputPrint(GAME_MESSAGE.print_move_status(carName, curMoveForward))
      }
      await messagePrinter.outputPrint(GAME_MESSAGE.line_break)
    }
    const printWinners = async(carNameArr, curMoveForwardArr) => {
      const maxMove = Math.max(...curMoveForwardArr);

      let winners = [];

      for (let i=0; i<carNameArr.length; i++) {
        if (maxMove === curMoveForwardArr[i]) {
          winners.push(carNameArr[i])
        }
      }

      await messagePrinter.outputPrint(GAME_MESSAGE.print_winners(winners))
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
