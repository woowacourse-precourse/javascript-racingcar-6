import { MissionUtils } from '@woowacourse/mission-utils'
import Input from '../View/Input'
import Output from '../View/Output'
import Car from '../Model/Car'

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
        Output.printEnter()
    }

    saveCarInfo(carNames){
        carNames.forEach((carName)=>{
            const car = new Car(carName)
            this.cars.push(car)
        })
    }

    playGame(){
        Output.printResult()
        for(let i=0; i<this.count; i++){
            this.moveCars()
            Output.printEnter()
        }

        const winner = this.getWinner()
        Output.printResult(winner)
    }

    moveCars(){
        this.cars.forEach((car) => {
            car.move()

            const name = car.getName()
            const count = car.getMovingCount()
            Output.printMovingCount(name, count)
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
}

module.exports = Race