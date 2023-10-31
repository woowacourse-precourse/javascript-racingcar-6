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
            if (MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
                element.score += '-'
            } currentScore += `${element.name} : ${element.score} \n`
        }) 
        MissionUtils.Console.print(currentScore)
    } 

    getWinner(result) {
        let checkScore = []
        result.forEach((e) => {
            checkScore.push({name: e.name, score: e.score.length})
        })

        let max_val = checkScore.map(e => e.score).reduce((max, curr) => max < curr ? curr : max)
        let winners = []
        checkScore.forEach((e)=> {
            if(max_val === e.score) {
                winners.push(`${e.name}`);
            }
        })
        MissionUtils.Console.print(`최종 우승자 : ${winners}`)
    }
}