import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
       const PARTIPATING_RACING_CARS = await this.inputParticipatingCar();
       const NUMBER_OF_ROUNDS = await this.inputNumberOfRounds();
       const WINNERS = this.startRacing(PARTIPATING_RACING_CARS, NUMBER_OF_ROUNDS);

       Console.print("최종 우승자 : "+WINNERS);
    } catch (err) {
      throw new Error(err);
    }
  }

  async inputParticipatingCar() { 
    let participatingRacingCars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'); 
    participatingRacingCars = participatingRacingCars.split(',');
  
    participatingRacingCars.forEach((el) => { 
      if(el.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5글자 이하로 입력해주세요');
      }
    });

    return participatingRacingCars;
  }

  async inputNumberOfRounds() { 
    let NumberOfRounds = await Console.readLineAsync('시도할 횟수는 몇 회인가요?'); 

    if(isNaN(NumberOfRounds)) { 
      throw new Error('[ERROR] 숫자를 입력해주세요');
    }

    return Number(NumberOfRounds); 
  }

  currentRacingCarsLocation( 
    previousRacingCarsLocation, 
    currentRoundRandomNumber,
  ) { 
      currentRoundRandomNumber.forEach((el,idx) => {
        if(el>=4) {
          previousRacingCarsLocation[idx] += '-';
        }
      })

      return previousRacingCarsLocation; 
  }

  createCurrentRoundRandomNumbers(participatingRacingCarsNumber) {  
    let randomNumbers = [];

    for(let i=0; i<participatingRacingCarsNumber; i++){
      randomNumbers.push(Random.pickNumberInRange(1,9));
    }

    return randomNumbers;
  }

  SelectWinner( 
    participatingRacingCars,
    finalRacingCarsLocation
  ) { 
      let mostMoves = 0;
      let winners = [];

      finalRacingCarsLocation.forEach((el) => {
        if(el.length > mostMoves) {
          mostMoves = el.length;
        }
      })

      finalRacingCarsLocation.forEach((el,idx) => {
       if(el.length === mostMoves) {
         winners.push(participatingRacingCars[idx]);
       }
      })

     return String(winners);
  }

  startRacing(
    participatingRacingCars, 
    numberOfRounds
  ) {
      let RacingCarsLocation = [];
      let roundRandomNumber = [];

      for(let i=0; i<participatingRacingCars.length; i++) {
        RacingCarsLocation.push('');
      }

      for(let i=0; i<numberOfRounds; i++) {  
        roundRandomNumber = this.createCurrentRoundRandomNumbers(participatingRacingCars.length);
        RacingCarsLocation = this.currentRacingCarsLocation(RacingCarsLocation, roundRandomNumber);

        participatingRacingCars.forEach((el,idx) => {
          Console.print(el+" : "+RacingCarsLocation[idx]);
        })
      }

      return this.SelectWinner(participatingRacingCars, RacingCarsLocation);
  }

}

export default App;
