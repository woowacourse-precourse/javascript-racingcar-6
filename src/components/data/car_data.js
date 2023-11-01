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
    return
};

export {carDataInit, getCarData, setCarData};