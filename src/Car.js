import {Console , Random} from '@woowacourse/mission-utils'

class Car {
    #carName='';

    #distance='';

    setName(input){
        this.#carName = input;
    }

    getName(){
        return this.#carName;
    }

    tryAdvance() {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) this.#distance += "-"
    }

    getDistance() {
        return this.#distance
    }
}

export default Car;