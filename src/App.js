const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  async play() {

    async function getCarName() {
      let carNameArray = [];
      let carNameString = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
      carNameArray = this.isValidName(carNameString);
    }

    function isValidName(userInput) {
      if (userInput.includes(" ")) {
        throw new Error("[ERROR] 띄워쓰기를 하지 마세요.");
      } else if (userInput.length > 6) {
        throw new Error("[ERROR] 5글자 이하로 적어주세요.");
      } 

      return userInput.split(",");
    }

    console.log(getCarName());
  }
}

export default App;
