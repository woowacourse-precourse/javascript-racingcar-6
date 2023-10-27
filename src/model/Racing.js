import { Random } from "@woowacourse/mission-utils";

class Racing{
    constructor(){

    }

    racingPlay = (racingCarName, forward_number) => {
        racingCarName.forEach((data, index) => {
            if(forward_number[index] >= 4){
                racingCarName[index] = data + '-';
            }
        });
        return racingCarName;
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