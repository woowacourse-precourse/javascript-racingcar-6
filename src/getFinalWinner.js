import { MissionUtils } from "@woowacourse/mission-utils";

function getFinalWinner(allScore, winnerScoreLength, carName) {
    const final = {};
    for (let i = 0; i < carName.length; i++) {
        final[carName[i]] = allScore[i];
    }
    const playerOfFinal = Object.keys(final);
    const winner = playerOfFinal.filter((key) => final[key].length == winnerScoreLength);
    let finalWinner = winner[0];
    for (let i = 0; i < winner.length; i++) {
        if (i >= 1) {
            finalWinner = finalWinner + ", " + winner[i];
        }    
    }
    MissionUtils.Console.print("최종 우승자 : " + finalWinner);
}

export default getFinalWinner;