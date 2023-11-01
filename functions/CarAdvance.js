import { MissionUtils } from "@woowacourse/mission-utils";

async function carAdvance(carAdvanceState) {
    const returnArr = [];
    carAdvanceState.forEach(element => {
        const RandomNo = MissionUtils.Random.pickNumberInRange(0, 9);
        
        RandomNo >=4 ? returnArr.push(element+1) : returnArr.push(element);
    });

    return returnArr;
}

export default carAdvance;