import { MissionUtils } from '@woowacourse/mission-utils'
import Input from '../View/Input'
import Car from '../Model/Car'
import { LOGS } from '../libs/LOGS';

class Race{
    count;
    cars;

    constructor(){
        this.count = 0
        this.cars = []
    }

    async startRace(){
        await this.getRaceInfo()
        this.playGame()
    }

    async getRaceInfo(){
        const carNames = await Input.getCarNames()
        this.saveCarInfo(carNames)

        this.count = await Input.getCount()
        MissionUtils.Console.print(LOGS.PRINT_ENTER)
    }

    saveCarInfo(carNames){
        carNames.forEach((carName)=>{
            const car = new Car(carName)
            this.cars.push(car)
        })
    }

    playGame(){
        MissionUtils.Console.print(LOGS.PRINT_RESULT)
        for(let i=0; i<this.count; i++){
            this.moveCars()
            MissionUtils.Console.print(LOGS.PRINT_ENTER)
        }

        const winner = this.getWinner()
        this.printWinner(winner)
    }

    moveCars(){
        this.cars.forEach((car) => {
            car.move()
            car.printMovingCount()
        })
    }

    getWinner(){
        const movingCount = []
        this.cars.forEach((car) => {
            const count = car.getMovingCount()
            movingCount.push(count)
        })
        const maxCount = Math.max(...movingCount)

        const winnerArray = []

        this.cars.forEach((car)=>{
            if(car.getMovingCount() === maxCount)
            winnerArray.push(car.getName())
        })
        const winner = winnerArray.join(', ')
        return winner
    }

    printWinner(winner){
        MissionUtils.Console.print(`${LOGS.PRINT_WINNER}${winner}`)
    }
}

module.exports = Race