import { MissionUtils } from "@woowacourse/mission-utils";


export default class Score {
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