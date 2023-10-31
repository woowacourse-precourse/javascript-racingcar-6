class Referee {
  static judge(cars) {
    const maxCount = cars.reduce(
      (max, car) => (car.getForwardCount() > max ? car.getForwardCount() : max),
      0
    );

    return cars.filter((car) => car.getForwardCount() === maxCount);
  }
}

export default Referee;
