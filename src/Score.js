import { MissionUtils } from "@woowacourse/mission-utils";

export default class Score {
    getScore() {
        let score = MissionUtils.Random.pickNumberInRange(1, 9)
        console.log (score)
    } 
}

let score = new Score
score.getScore()
