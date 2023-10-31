import { MissionUtils } from '@woowacourse/mission-utils'

class Car{
    name; // 자동차 이름
    movingCount; // 자동차 전진 횟수

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

    // 난수값이 4 이상인 경우 자동차 전진시킴
    move(){
        const randNum = MissionUtils.Random.pickNumberInRange(0, 9)
        if(randNum >= 4) this.movingCount += 1
    }
}

module.exports = Car
