let carData = {};

const carDataInit = (carName) =>{
    for (let element of carName) {
        carData[element] = 0;
    }
    return carData;
};

const carDataGet = () => {
    return carData
};

const carDataSet = () => {}

export {carDataInit, carDataGet, carDataSet};