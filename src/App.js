import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async(text) => {
  let userInput = '';
  await MissionUtils.Console.readLineAsync(text)
    .then((input) => {userInput = input})
    .catch((err) => {throw err});

  return userInput;
}

const splitUserInputByComma = (userInput) => {
  const inputSplitByComma = userInput.split(',');
  return inputSplitByComma;
}

const checkNameLength = (userNames) => {
  userNames.forEach((val) => {
    if(val.length > 5) throw new Error("[ERROR] : 이름은 다섯자 이하입니다.");
  })
}

const stringToNaturalNumber = (userInputNumber) => {
  const number = Number(userInputNumber);

  if(isNaN(number)) throw new Error('[ERROR] : 입력이 숫자가 아닙니다.');

  if(!Number.isInteger(number)) throw new Error('[ERROR] : 입력이 자연수가 아닙니다.' );

  if(number <= 0) throw new Error('[ERROR] : 입력이 자연수가 아닙니다.');

  return number;
}



class App {
  async play() {
    try {
      const userInputNames = await getUserInput('Enter your Input : ');
      const userNames = await splitUserInputByComma(userInputNames);

      checkNameLength(userNames);

      const userInputgameRep = await getUserInput('시도할 횟수는 몇 회인가요?');

      const gameRep = stringToNaturalNumber(userInputgameRep);

      MissionUtils.Console.print(gameRep);

    } catch(err) {
      console.log(err.msg);
      return Promise.reject(err);
    }
  }
}

export default App;
