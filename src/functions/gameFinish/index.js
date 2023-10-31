const checkDistanceResult = carDistanceList => {
  let winnerList = [];

  carDistanceList.reduce((maxDistance, currentCar) => {
    if (maxDistance < currentCar.distance.length) {
      winnerList = [currentCar.carName];
      return currentCar.distance.length;
    }

    if (maxDistance === currentCar.distance.length) {
      winnerList.push(currentCar.carName);
    }
    return maxDistance;
  }, 0);

  return winnerList;
};

export default checkDistanceResult;
