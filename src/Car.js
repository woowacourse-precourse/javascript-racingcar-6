import { MissionUtils } from '@woowacourse/mission-utils';
import { MIN_RANGE, MAX_RANGE, MARK_MOVE } from './Constant.js';

class Car {
    constructor(carName) {
        this.carName = carName;
        this.carMove = '';
      }
    
    moveCar() {
    const randomNum = MissionUtils.Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
    if (randomNum >= 4)
        this.carMove += MARK_MOVE;
    }

    getCarName() {
        return this.carName;
    }

    getCarMove() {
        return this.carMove;
    }
}

export default Car;