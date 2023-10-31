import { MissionUtils } from '@woowacourse/mission-utils'
import { LOGS } from '../libs/LOGS'

const Output = {
    // '실행 결과' 출력 함수
    printResult(){
        MissionUtils.Console.print(LOGS.PRINT_RESULT)
    },

    // new line 출력 함수
    printEnter(){
        MissionUtils.Console.print(LOGS.PRINT_ENTER)
    },

    // 자동차 이름, 전진 횟수 출력 함수
    printMovingCount(name, count){
        const dash = '-'.repeat(count)
        MissionUtils.Console.print(`${name} : ${dash}`)
    },

    // 우승자 출력 함수
    printWinner(winner){
        MissionUtils.Console.print(`${LOGS.PRINT_WINNER}${winner}`)
    },  
}

module.exports = Output