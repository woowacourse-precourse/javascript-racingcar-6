import { Car } from "./Car.js";

export class GameOptions {
    #cars;
    #totalMoves;

    constructor(cars, totalMoves) {
        if (!(cars instanceof Array)) {
            throw new Error("[GameOptions] cars - invalid argument");
        }
        if (cars.length > 0 && !(cars[0] instanceof Car)) {
            throw new Error("[GameOptions] cars - invalid argument");
        }
        if (typeof totalMoves !== 'number') {
            throw new Error("[GameOptions] totalMoves - invalid argument");
        }
        if (totalMoves === NaN) {
            throw new Error("[GameOptions] totalMoves - invalid argument");
        }

        this.#cars = cars;
        this.#totalMoves = totalMoves;
    }

    get cars() {
        return [...this.#cars];
    }

    get totalMoves() {
        return this.#totalMoves;
    }
}
