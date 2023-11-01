function moveCar(name, carsMovedCount) {
  carsMovedCount[name]++;
}

export function moveCars(names, carsMovedCount) {
  names.forEach((name) => moveCar(name, carsMovedCount));
}
