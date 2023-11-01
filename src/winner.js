export function getWinner(names, carsMovedCount) {
  let maxCount = -1;
  let maxCountNames = [];

  for (const name in names) {
    if (carsMovedCount[name] > maxCount) {
      maxCount = carsMovedCount[name];
      maxCountNames = [name];
    } else if (carsMovedCount[name] === maxCount) {
      maxCountNames.push(name);
    }
  }

  return maxCountNames.join(", ");
}
