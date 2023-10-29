import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async(text) => {
  let userInput = '';
  await MissionUtils.Console.readLineAsync(text)
    .then((input) => {userInput = input})
    .catch((err) => {throw err});

  return userInput;
}

class App {
  async play() {
    try {
      const userInput = await getUserInput('Enter your Input : ');

      MissionUtils.Console.print(userInput);
    } catch(err) {

    }
  }
}

export default App;
