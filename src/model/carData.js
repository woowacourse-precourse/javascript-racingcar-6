class CarData {
  #maxMove;
  #carList = [];

  constructor(carList) {
    this.#maxMove = 0;

    // carList.forEach((car) => {
    //   console.log(car);
    //   this.#carList[car] = 0;
    // });
    this.#carList = carList.map((car) => {
      const tempObj = {};
      tempObj[car] = 0;
      return tempObj;
    });
    console.log(this.#carList);
  }
}

export default CarData;
