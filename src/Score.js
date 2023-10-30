import { MissionUtils } from "@woowacourse/mission-utils";


export default class Score {
    playGames(count,names) {
        MissionUtils.Console.print('\n실행결과')
        for(let i = 0 ; i < count ; i ++) {
            this.getScore(names)
        } this.getWinner(names)
    } 

    getScore(names) {
        let currentScore = ''
        names.forEach((element) => {
            if (MissionUtils.Random.pickNumberInRange(1, 9) > 4) {
                element.score += '-'
            } currentScore += `${element.name}: ${element.score} \n`
        }) 
        console.log(currentScore)
    } 

    getWinner(result) {
        console.log(result) 
    }
}