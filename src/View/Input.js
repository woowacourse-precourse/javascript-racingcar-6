import { MissionUtils } from '@woowacourse/mission-utils'
import { LOGS } from '../libs/LOGS'

const Input = {
    // 사용자로부터 자동차 이름 받기
    async getCarNames(){
        const input =  await MissionUtils.Console.readLineAsync(LOGS.GET_CAR_NAME)
        const inputArray =  input.split(',')
        this.checkCarValidity(inputArray)

        return inputArray
    },

    // 자동차 개수 및 이름 검사
    checkCarValidity(carNames){
        // 자동차가 1대 이하일 때 에러 처리
        if(carNames.length <= 1) throw new Error(LOGS.ERROR_LESS_THAN_ONE)

        // 자동차 이름이 5자 초과이거나 없을 때 에러 처리
        carNames.forEach(car => {
            if(car.length > 5 || car.length === 0) 
                throw new Error(LOGS.ERROR_INVALID_CAR_NAME)
        })
    },

    // 사용자로부터 이동횟수 받기
    async getCount(){
        const input = await MissionUtils.Console.readLineAsync(LOGS.GET_COUNT)
        this.checkCountValidity(input)

        return Number(input)
    },

    // 이동횟수 input 유효성 검사
    checkCountValidity(input){
        if(isNaN(input)) throw new Error(LOGS.ERROR_NOT_NUMBER) // 숫자가 아닌 경우 에러 처리

        const count = Number(input)
        if(!Number.isInteger(count)) throw new Error(LOGS.ERROR_NOT_INT) // 정수가 아닌 경우 에러 처리
        if(count <= 0) throw new Error(LOGS.ERROR_NOT_POSITIVE) // 음수 또는 0인 경우 에러 처리
    }
}

module.exports = Input