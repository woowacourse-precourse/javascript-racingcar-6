export function getWinner(names, carsMovedCount) {
  let maxCount = -1;
  let maxCountNames = [];

  names.forEach((name) => {
    if (carsMovedCount[name] > maxCount) {
      maxCount = carsMovedCount[name];
      maxCountNames = [name];
    } else if (carsMovedCount[name] === maxCount) {
      maxCountNames.push(name);
    }
  });

  return maxCountNames.join(", ");
}
