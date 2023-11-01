function findWinner(racingObj) {
  let maxValue = getMaxValue(Object.values(racingObj));
  let maxKey = getMaxKey(racingObj, maxValue);
  return maxKey.join(", ");
}

function getMaxValue(values) {
  return Math.max(...values);
}
function getMaxKey(racingObj, max) {
  return Object.keys(racingObj).filter((key) => racingObj[key] === max);
}
export default findWinner;
