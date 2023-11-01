class Car {
    constructor(carName) {
        this.name = carName;
        this.distance = 0;
    }

    moveForward(){
        this.distance += 1;
    }

    get shapeOfDistance(){
        return '-'.repeat(this.distance);
    }
}

export default Car;