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
        console.log(this.cars);
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
        const distanceArr = cars.map(car=> car.distance.length);
        
        const maxDistance = distanceArr.reduce((max,current) => {
            return current > max ? current : max
        },distanceArr[0]);
        
        return maxDistance;
    }
   
}

export default Racing;