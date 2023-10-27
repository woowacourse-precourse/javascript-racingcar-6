import Car from "./Car.js";
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
   
}

export default Racing;