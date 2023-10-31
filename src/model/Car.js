import { Console } from "@woowacourse/mission-utils";

class Car {
    carName = "";
    position = "";

    constructor(carName) {
        this.setCarName(carName)
    }

    setCarName(carName) {
        this.carName = carName
    }

    getCarName() {
        return this.carName
    }

    getPosition() {
        return this.position
    }

    move(isMove) {
        isMove ? this.position += '-' : ''
        Console.print(`${this.carName} : ${this.position}`)
    }
}

export default Car