import Car from "./car";

function createCarList(carNameList) {
  let carList = [];
  carNameList.forEach((element) => {
    carList.push(new Car(element));
  });

  return carList;
}

export default createCarList;
