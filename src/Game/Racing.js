import Car from "./Car.js";
import { print } from "../utils/index.js";
class Racing {

    constructor() {
        this.cars = [];
    }

    registCar(names) {
        const removeBlank = names.replace(/\s/g, '');
        const splitCars = removeBlank.split(',');
        this.cars = splitCars.map(car => new Car(car));
    }
    
    moveCycle() {
        this.cars.forEach(car => {
            car.move();
        })
    }

    oneMoveCycleResult() {
        this.cars.forEach(car => {
            print(car.toStringResult());
        });
    }

    getMaxDistance() {
        const cars = this.cars;
        const distanceArr = cars.map(car=> car.getDistance());
        const maxDistance = distanceArr.reduce((max,current) => {
            return current > max ? current : max
        },distanceArr[0]);

        return maxDistance;
    }

    getWinner() {
        const cars = this.cars;
        const maxDistance = this.getMaxDistance();
        const winCar = cars.filter(car => car.getDistance() === maxDistance);
        return winCar.map(car => car.name).join(', ');
    }
}

export default Racing;