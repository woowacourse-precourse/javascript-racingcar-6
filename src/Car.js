import {Console} from '@woowacourse/mission-utils'

class Car {
    #carName='';

    #distance='';

    setName(input){
        this.#carName = input;
    }

    getName(){
        return this.#carName;
    }

}

export default Car;