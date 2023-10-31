import { MissionUtils } from '@woowacourse/mission-utils'
import { LOGS } from '../libs/LOGS'

const Output = {
    printResult(){
        MissionUtils.Console.print(LOGS.PRINT_RESULT)
    },

    printEnter(){
        MissionUtils.Console.print(LOGS.PRINT_ENTER)
    },

    printMovingCount(name, count){
        const dash = '-'.repeat(count)
        MissionUtils.Console.print(`${name} : ${dash}`)
    },

    printWinner(winner){
        MissionUtils.Console.print(`${LOGS.PRINT_WINNER}${winner}`)
    },  
}

module.exports = Output