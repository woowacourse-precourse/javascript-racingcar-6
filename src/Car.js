class Car {
    constructor(carName) {
        this.name = carName;
        this.distance = 0;
    }

    moveForward(){
        this.distance += 1;
    }

    getDistance(){
        return '-'.repeat(this.distance);
    }
}

export default Car;