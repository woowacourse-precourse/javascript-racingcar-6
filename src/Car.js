import { Random } from "@woowacourse/mission-utils";
class Car {
    constructor(name) {
        this.distance = 0;
        this.name = name;
    }

    async drive(){
        const RANDOM_INTEGER_FROM_0_TO_9 = Random.pickNumberInRange(0, 9);
        if (RANDOM_INTEGER_FROM_0_TO_9 >= 4){
            this.distance +=1;
        } 
    }
}
export default Car;