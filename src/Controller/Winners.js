export class Winners {
  selectPrintWinner(carArray) {
    const maxDistance = this.getMaxDistance(carArray);
    const winnerCarArray = this.getWinnerCarArray(carArray, maxDistance);
    const winnerNameArray = this.getOnlyNameArray(winnerCarArray);
  }

  getMaxDistance(carArray) {
    const distanceArray = carArray.map((carObject) => carObject.distance);
    return Math.max(...distanceArray);
  }

  getWinnerCarArray(carArray, maxDistance) {
    return carArray.filter((carObject) => carObject.distance === maxDistance);
  }

  getOnlyNameArray(array) {
    return array.map((object) => object.name);
  }
}
