import { MissionUtils } from '@woowacourse/mission-utils'

const Input = {
    async getCarNames(){
        const input =  await MissionUtils.Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`)
        const inputArray =  input.split(',')
        this.checkCarValidity(inputArray)

        return inputArray
    },

    checkCarValidity(carNames){
        // 차가 1대 이하일 때
        if(carNames.length <= 1) throw new Error('[ERROR]')

        // 차 이름이 5자 초과이거나 없을 때
        carNames.forEach(car => {
            if(car.length > 5 || car.length === 0) 
                throw new Error('[ERROR]')
        })
    },

    async getCount(){
        const input = await MissionUtils.Console.readLineAsync(`시도할 횟수는 몇 회인가요?`)
        this.checkCountValidity(input)

        return Number(input)
    },

    checkCountValidity(input){
        if(isNaN(input)) throw new Error('[ERROR]')

        const count = Number(input)
        if(!Number.isInteger(count)) throw new Error('[ERROR]')
        if(count <= 0) throw new Error('[ERROR]') 
    }
}

module.exports = Input