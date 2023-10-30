import { MissionUtils } from '@woowacourse/mission-utils';
class Car {    
    constructor(name) {
        this.name = name;
        this.forward = 0;
        if (this.name.length>5){
            throw new Error('[ERROR] 5자리 이하의 이름만 가능합니다.');
        }
    }
    run() { 
        if (MissionUtils.Random.pickNumberInRange(0, 9)>=4){
            forward++;
        }       
        return forword;
    }

}