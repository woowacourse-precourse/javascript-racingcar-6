import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async(text) => {
  let userInput = '';
  await MissionUtils.Console.readLineAsync(text)
    .then((input) => {userInput = input})
    .catch((err) => {throw err});

  return userInput;
}

const getUserName = (userInput) => {
  const userNames = userInput.split(',');
  return userNames;
}

class App {
  async play() {
    try {
      const userInput = await getUserInput('Enter your Input : ');

      const userNames = await getUserName(userInput);
      MissionUtils.Console.print(userNames);
    } catch(err) {
      console.log(err);
    }
  }
}

export default App;
