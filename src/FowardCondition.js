import { Console, MissionUtils } from "@woowacourse/mission-utils";

const fowardConditions = (player)=>{
    // Console.print("from FowardConditions...");
    const scoreCondition = MissionUtils.Random.pickNumberInRange(0, 9);
    if(scoreCondition>4){
        // Console.print("전진하라!");
        return player+=1;
    }
    // else{
    //     Console.print(scoreCondition);
    // }
}

export default fowardConditions;