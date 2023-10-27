class Car {
    constructor(carName) {
        this.name = carName;
        this.distance = 0;
    }

    moveForward(){
        this.distance += 1;
    }
}

export default Car;