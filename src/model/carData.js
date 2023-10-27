class CarData {
	#maxMove;
  #carList = {};

  constructor() {};

  constructor(carList) {
		this.#maxMove = 0;

		carList.forEach((car) => {
			carList[car] = 0;
		});
	};
}
