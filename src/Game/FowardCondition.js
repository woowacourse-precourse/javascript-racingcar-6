import { Console, MissionUtils } from "@woowacourse/mission-utils";

const fowardConditions = (carsScores,numberOfAttempts,winner)=>{
    for(let i =0;i<carsScores.length;i++){
<<<<<<< HEAD
         let scoreCondition = MissionUtils.Random.pickNumberInRange(0,9);
=======
        // loser = [].concat(carsScores[i][0]);
        let scoreCondition = MissionUtils.Random.pickNumberInRange(0,9);
>>>>>>> 50ccfde922b4411a40ca042db9bf87687c5c5a98
        if(scoreCondition>=4) carsScores[i][1]+=1;
        if(numberOfAttempts == carsScores[i][1]) winner.push(carsScores[i][0]);
        Console.print(`${carsScores[i][0]} : ${"-".repeat(carsScores[i][1])}`);
    }
 }
export default fowardConditions;