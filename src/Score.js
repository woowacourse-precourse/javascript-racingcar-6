import { MissionUtils } from "@woowacourse/mission-utils";


export default class Score {
    getScore(names) {
        console.log(names)

        names.forEach((element) => {
            if (MissionUtils.Random.pickNumberInRange(1, 9) > 4) {
                element.score += '-'
            }
        })
        console.log(names)
    } 
}