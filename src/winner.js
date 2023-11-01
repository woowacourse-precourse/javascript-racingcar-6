export function getWinner(names, carsMovedCount) {
  let maxCount = -1;
  let maxCountNames = [];

  names.forEach((name, nameIndex) => {
    if (carsMovedCount[nameIndex] > maxCount) {
      maxCount = carsMovedCount[nameIndex];
      maxCountNames = [name];
    } else if (carsMovedCount[nameIndex] === maxCount) {
      maxCountNames.push(name);
    }
  });

  return maxCountNames.join(", ");
}
