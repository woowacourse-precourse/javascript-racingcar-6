import { validCars } from "../validation/carsValidation.js";

export function makeCarsArray(message){
    const cars = message.split(',');

    validCars(cars);

    return cars;
}