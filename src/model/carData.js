class CarData {
  #maxMove;
  #carList = {};

  constructor(carList) {
    this.#maxMove = 0;

    carList.forEach((car) => {
      this.#carList[car] = 0;
    });

    console.log(this.#carList);
  }
}

export default CarData;
