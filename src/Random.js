import {MissionUtils} from "@woowacourse/mission-utils";

export const makeAndFilter = () =>{
    let arr = [];
    while (arr.length !== 5) {
        arr.push(MissionUtils.Random.pickNumberInRange(0, 9));
    }
    return arr.filter(a => a >= 4).length;

}