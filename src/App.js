import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
       const CARS = await this.participatingCar()
       const NUMBEROFCARS = await this.numberOfMoves()
       const result = this.startRacing(CARS, NUMBEROFCARS) 
       Console.print(result)
    } catch (err) {
      throw new Error(err);
    }
  }

  async participatingCar(){
  let cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)')
  cars = cars.split(',')
  
  cars.forEach(el => { 
    if(el.length > 5){
      throw new Error('[ERROR] 올바른 형식으로 입력해주세요')
    }
  });

  return cars
 }

  async numberOfMoves(){
  let NumberOfmoves = await Console.readLineAsync('시도할 횟수는 몇 회인가요?')
  if(isNaN(NumberOfmoves)){
    throw new Error('[ERROR] 올바른 형식으로 입력해주세요')
  }

  return Number(NumberOfmoves);
 }

  trackingCarsMove(moveOfCars, roundRandomNumber){ 
  for(let i=0; i<roundRandomNumber.length; i++){
   if(roundRandomNumber[i]>=4){
     moveOfCars[i] = moveOfCars[i]+'-';
   }
  }

  return moveOfCars;
 }

  createRoundRandomNumbers(participatingCarsNumber){ 
  let arr = []
  for(let i=0; i<participatingCarsNumber; i++){
    arr.push(Random.pickNumberInRange(1,9))
  }

  return arr
}

  winnerSelect(participatingCar, moveOfCars){ 
    let mostMoves = 0
    let winners = []

    moveOfCars.forEach((el)=>{
      if(el.length > mostMoves){
        mostMoves = el.length;
      }
    })

    moveOfCars.forEach((el,idx)=>{
      if(el.length === mostMoves){
        winners.push(participatingCar[idx])
      }
    })

    return winners.toString()
  }

  startRacing(participatingCar, numberOfMoves){
    let moveOfCars = new Array(participatingCar.length).fill('')
    let roundRandomNumber = new Array(participatingCar.length)

    for(let i=0; i<numberOfMoves; i++){  
      roundRandomNumber = this.createRoundRandomNumbers(participatingCar.length)
      moveOfCars = this.trackingCarsMove(moveOfCars, roundRandomNumber)

      participatingCar.forEach((el,idx)=>{
        Console.print(el+" : "+moveOfCars[idx])
      })
    }

    return this.winnerSelect(participatingCar, moveOfCars)
  }
  
}

export default App;
