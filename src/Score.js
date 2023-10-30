import { MissionUtils } from "@woowacourse/mission-utils";


export default class Score {
    playGames(count,names) {
        for(let i = 0 ; i < count ; i ++) {
            this.getScore(names)
        } console.log(count)
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
}