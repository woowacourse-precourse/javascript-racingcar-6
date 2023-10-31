import { MissionUtils } from '@woowacourse/mission-utils'
import Input from '../View/Input'
import Output from '../View/Output'
import Car from '../Model/Car'

class Race{
    count; // 시도 횟수
    cars; // 경주에 참여하는 자동차들(인스턴스 저장)

    constructor(){
        this.count = 0
        this.cars = []
    }

    // 경주 시작 함수
    async startRace(){
        await this.getRaceInfo()
        this.playGame()
    }

    // 경주할 자동차 이름, 시도 횟수를 저장
    async getRaceInfo(){
        const carNames = await Input.getCarNames()
        this.saveCarInfo(carNames)

        this.count = await Input.getCount()
        Output.printEnter()
    }

    // 자동차 인스턴스 생성 후 이름&객체 저장
    saveCarInfo(carNames){
        carNames.forEach((carName)=>{
            const car = new Car(carName)
            this.cars.push(car)
        })
    }

    // 게임 전반적인 흐름을 담당. 자동차를 움직인 후 우승자 출력
    playGame(){
        Output.printResult()
        for(let i=0; i<this.count; i++){
            this.moveCars()
            Output.printEnter()
        }

        const winner = this.getWinner()
        Output.printResult(winner)
    }

    // 자동차를 전진시키고 이동결과 출력
    moveCars(){
        this.cars.forEach((car) => {
            car.move()

            const name = car.getName()
            const count = car.getMovingCount()
            Output.printMovingCount(name, count)
        })
    }

    // 최종 이동 결과를 바탕으로 우승한 자동차 이름 반환
    getWinner(){
        // 1. 가장 많이 전진한 횟수(maxCount) 구하기
        const movingCount = []
        this.cars.forEach((car) => {
            const count = car.getMovingCount()
            movingCount.push(count)
        })
        const maxCount = Math.max(...movingCount)

        // 2. maxCount를 가지는 자동차 이름 모두 구하기
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