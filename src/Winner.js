class Winner {
  static start(cars, numberOfAttempts) {
    let maxDistance = 0;
    let winners = [];

    for (let i = 0; i < numberOfAttempts; i++) {
      cars.forEach(car => car.move());
      const distanceValues = cars.map(car => car.distance);
      maxDistance = Math.max(...distanceValues);
    }

    winners = cars.filter(car => car.distance === maxDistance);

    return winners;
  }
}

export default Winner;




