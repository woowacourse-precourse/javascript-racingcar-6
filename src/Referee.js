class Referee {
  static judge(cars) {
    let maxCount = 0;

    return cars.reduce((winners, car) => {
      if (car.getForwardCount() >= maxCount) {
        maxCount = car.getForwardCount();
        return [...winners, car];
      }

      return winners;
    }, []);
  }
}

export default Referee;
