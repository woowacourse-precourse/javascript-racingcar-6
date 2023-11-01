import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  getUserInput = async (text) => {
    let userInput = '';
  
    await MissionUtils.Console.readLineAsync(text)
      .then((input) => {userInput = input})
      .catch((err) => {throw err});
  
    return userInput;
  }
  
  splitUserInputByComma = (userInput) => {
    const inputSplitByComma = userInput.split(',');
  
    return inputSplitByComma;
  }
  
  checkNameLength = (userNames) => {
    userNames.forEach((name) => {
      if(name.length < 1) throw new Error('[ERROR] : 이름은 한글자 이상입니다.');
      if(name.length > 5) throw new Error('[ERROR] : 이름은 다섯자 이하입니다.');
    })
  }
  
  stringToNaturalNumber = (userInputNumber) => {
    const number = Number(userInputNumber);
  
    if(isNaN(number)) throw new Error('[ERROR] : 입력이 숫자가 아닙니다.');
    if(!Number.isInteger(number)) throw new Error('[ERROR] : 입력이 자연수가 아닙니다.' );
    if(number <= 0) throw new Error('[ERROR] : 입력이 자연수가 아닙니다.');
  
    return number;
  }
  
  getRandomNumber = () => {
    return MissionUtils.Random.pickNumberInRange(0,9);
  }
  
  generateRacingCar = (numberOfUsers) => {
    const racingCars = [];
    let count = 0;
    while(count < numberOfUsers.length) {
      racingCars.push(0);
      count++;
    }
  
    return racingCars;
  }
  
  updateRacingCarLocation = (racingCars) => {
    const updatedRacingCarLocation = racingCars.map((score) => {
      const randomNumber = this.getRandomNumber();
  
      if(randomNumber >= 4) {
        return score + 1;
      } else {
        return score;
      }
    })
  
    return updatedRacingCarLocation;
  }
  
  printGameStatus = (userNames, racingCars) => {
    userNames.forEach((userName, index) => {
      const userStatus = `${userName} : `;
      const scoreStatus = '-'.repeat(racingCars[index]);
      MissionUtils.Console.print(userStatus + scoreStatus);
    })
  }
  
  gameStarter = (userNames, gameRep)=> {
    let racingCars = this.generateRacingCar(userNames);
    let count = 0;
  
    while(count < gameRep) {
      racingCars = this.updateRacingCarLocation(racingCars);
      
      this.printGameStatus(userNames, racingCars);
  
      count++;
    }
  
    return racingCars;
  }
  
  getWinner = (userNames, gameResult) => {
    let maxScore = 0;
  
    gameResult.forEach((score) => {
      if(score > maxScore) maxScore = score;
    })
  
    const winners = [];
  
    gameResult.forEach((score, index) => {
      if(score == maxScore) {
        winners.push(userNames[index]);
      }
    })
  
    return winners;
  }
  
  printWinner = (winners) => {
    const winnerString = winners.join(', ');
    const winnerText = `최종 우승자 : ${winnerString}`;
  
    MissionUtils.Console.print(winnerText);
  }

  async play() {
    try {
      MissionUtils.Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

      const userInputNames = await this.getUserInput('');
      const userNames = this.splitUserInputByComma(userInputNames);

      this.checkNameLength(userNames);

      MissionUtils.Console.print('시도할 횟수는 몇 회인가요?');

      const userInputGameRep = await this.getUserInput('');
      const gameRep = this.stringToNaturalNumber(userInputGameRep);

      const gameResult = this.gameStarter(userNames, gameRep);
      const winners = this.getWinner(userNames, gameResult);

      this.printWinner(winners);
    } catch(err) {
      return Promise.reject(err);
    }
  }
}

export default App;
