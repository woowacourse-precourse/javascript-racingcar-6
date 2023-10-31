import { MissionUtils } from '@woowacourse/mission-utils'
import { LOGS } from '../libs/LOGS'

const Input = {
    async getCarNames(){
        const input =  await MissionUtils.Console.readLineAsync(LOGS.GET_CAR_NAME)
        const inputArray =  input.split(',')
        this.checkCarValidity(inputArray)

        return inputArray
    },

    checkCarValidity(carNames){
        // 차가 1대 이하일 때
        if(carNames.length <= 1) throw new Error(LOGS.ERROR_LESS_THAN_ONE)

        // 차 이름이 5자 초과이거나 없을 때
        carNames.forEach(car => {
            if(car.length > 5 || car.length === 0) 
                throw new Error(LOGS.ERROR_INVALID_CAR_NAME)
        })
    },

    async getCount(){
        const input = await MissionUtils.Console.readLineAsync(LOGS.GET_COUNT)
        this.checkCountValidity(input)

        return Number(input)
    },

    checkCountValidity(input){
        if(isNaN(input)) throw new Error(LOGS.ERROR_NOT_NUMBER)

        const count = Number(input)
        if(!Number.isInteger(count)) throw new Error(LOGS.ERROR_NOT_INT)
        if(count <= 0) throw new Error(LOGS.ERROR_NOT_POSITIVE) 
    }
}

module.exports = Input