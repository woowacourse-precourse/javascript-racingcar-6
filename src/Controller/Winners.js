export class Winners {
  selectPrintWinner(carArray) {
    const distanceArray = carArray.map((carObject) => carObject.distance);
    const maxDistance = Math.max(...distanceArray);
    carArray = carArray.filter(
      (carObject) => carObject.distance === maxDistance
    );
  }
}
