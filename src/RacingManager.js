import { Console, Random } from "@woowacourse/mission-utils";

class RacingManager {
    async inputParticipatingCar() { 
        let participatingCars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'); 
        participatingCars = participatingCars.split(',');
      
        participatingCars.forEach((el) => { 
          if(el.length > 5) {
            throw new Error('[ERROR] 자동차 이름은 5글자 이하로 입력해주세요');
          }
        });
    
        return participatingCars;
      }
    
      async inputNumberOfRounds() { 
        let NumberOfRounds = await Console.readLineAsync('시도할 횟수는 몇 회인가요?'); 
    
        if(isNaN(NumberOfRounds)) { 
          throw new Error('[ERROR] 숫자를 입력해주세요');
        }
    
        return Number(NumberOfRounds); 
      }
    
      currentCarsLocation( 
        previousCarsLocation, 
        currentRoundRandomNumber,
      ) { 
          currentRoundRandomNumber.forEach((el,idx) => {
            if(el>=4) {
              previousCarsLocation[idx] += '-';
            }
          })
    
          return previousCarsLocation; 
      }
    
      createCurrentRoundRandomNumbers(participatingRacingCarsNumber) {  
        let randomNumbers = [];
    
        for(let i=0; i<participatingRacingCarsNumber; i++){
          randomNumbers.push(Random.pickNumberInRange(1,9));
        }
    
        return randomNumbers;
      }
    
      SelectWinner( 
        participatingCars,
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
             winners.push(participatingCars[idx]);
           }
          })
    
         return String(winners);
      }
    
      startRacing(
        participatingCars, 
        numberOfRounds
      ) {
          let RacingCarsLocation = [];
          let roundRandomNumber = [];
    
          for(let i=0; i<participatingCars.length; i++) {
            RacingCarsLocation.push('');
          }
    
          for(let i=0; i<numberOfRounds; i++) {  
            roundRandomNumber = this.createCurrentRoundRandomNumbers(participatingCars.length);
            RacingCarsLocation = this.currentCarsLocation(RacingCarsLocation, roundRandomNumber);
    
            participatingCars.forEach((el,idx) => {
              Console.print(el+" : "+RacingCarsLocation[idx]);
            })
          }
    
          return this.SelectWinner(participatingCars, RacingCarsLocation);
      }
}

export default RacingManager;