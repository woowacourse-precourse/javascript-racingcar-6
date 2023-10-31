export default function setArrayToMap(array) {
  const MAP = new Map();
  for (let i = 0; i < array.length; i++) {
    //key: car_name, value: move (default : 0)
    MAP.set(array[i], 0);
  }
  return MAP;
}
