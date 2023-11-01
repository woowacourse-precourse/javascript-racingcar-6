import movingCondition from "../logic/moving_condition.js";

let carData = {};

const carDataInit = (carName) =>{
    for (let element of carName) {
        carData[element] = 0;
    }
    return carData;
};

const getCarData = () => {
    return carData
};

const setCarData = () => {
    for (let car in carData) {
        carData[car] = movingCondition(carData[car]);
    }
};

export {carDataInit, getCarData, setCarData};