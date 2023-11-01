import Car from "./car.js";

function createCarList(carNameList) {
  let carList = [];
  carNameList.forEach((element) => {
    carList.push(new Car(element));
  });

  return carList;
}

export default createCarList;
