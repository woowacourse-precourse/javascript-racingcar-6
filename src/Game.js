import gameSetting from "./GameSetting";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

const game = (player,winScore) => {
    // gameSetting();
    let Winner = [];
    for(let i =0;i<player.length;i++){
        let scoreCondition = MissionUtils.Random.pickNumberInRange(0, 9);
        if(scoreCondition>=4){
            player[i][1]+=1;
        }
        Console.print(`${player[i][0]} : `+"-".repeat(player[i][1]));
        if(winScore == player[i][1]){
            Winner.push(player[i][0]);
        }
        else{
            continue;
        }
    }
}   
export default game;