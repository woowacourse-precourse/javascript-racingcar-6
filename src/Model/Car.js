import { MissionUtils } from '@woowacourse/mission-utils'

class Car{
    name;
    movingCount;

    constructor(name){
        this.name = name
        this.movingCount = 0
    }

    getName(){
        return this.name
    }

    getMovingCount(){
        return this.movingCount
    }

    move(){
        const randNum = MissionUtils.Random.pickNumberInRange(0, 9)
        if(randNum >= 4) this.movingCount += 1
    }

    printMovingCount(){
        const dash = '-'.repeat(this.movingCount)
        MissionUtils.Console.print(`${this.name} : ${dash}`)
    }
}

module.exports = Car
