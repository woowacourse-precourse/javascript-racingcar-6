import { MissionUtils } from '@woowacourse/mission-utils';
import User, {
  inputParticipantCarName,
  validParticipantCarName,
  inputNumberOfAttempts,
  validNumberOfAttempts,
} from './User.js';

function printOutput(output, movingPoint, idx) {
  let forOutput = output;
  let forIdx = idx;
  while (movingPoint > forIdx) {
    forOutput += '-';
    forIdx += 1;
  }
  return forOutput;
}

class App {
  async play() {
    const inputUserList = await inputParticipantCarName();
    console.log(inputUserList); // TODO 디버깅용
    await validParticipantCarName(inputUserList);
    const userList = new User(inputUserList);
    console.log(userList); // TODO 디버깅용
    let userInput = await inputNumberOfAttempts();
    await validNumberOfAttempts(userInput);
    console.log(userInput); // TODO 디버깅용
    MissionUtils.Console.print('실행 결과');
    while (userInput > 0) {
      await userList.setRandomValue();
      console.log(userList.carsMovingPoint); // TODO 디버깅용
      userList.carsMovingPoint.forEach((movingPoint, index) => {
        let output = userList.nameList[index];
        const idx = 0;
        output += ' : ';
        output = printOutput(output, movingPoint, idx);
        MissionUtils.Console.print(`${output}`);
      });
      userInput -= 1;
    }
  }
}

export default App;
