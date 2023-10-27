import { Random } from "@woowacourse/mission-utils";

class Racing{
    constructor(){

    }

    randomForwardCount = (num) => {
        let forwardNumber = [];
        for(let i = 0; i < num; i++){
            forwardNumber.push(Random.pickNumberInRange(0, 9))
        }
        return forwardNumber;
    }

}
export default Racing