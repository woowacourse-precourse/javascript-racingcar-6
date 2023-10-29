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



class App {
  async play() {
    try {
      const userInput = await getUserInput('Enter your Input : ');
      const userNames = await splitUserInputByComma(userInput);

      checkNameLength(userNames);

      MissionUtils.Console.print(userNames);


    } catch(err) {
      console.log(err.msg);
      return Promise.reject(err);
    }
  }
}

export default App;
