export default function setArrayToMap(array) {
  const MAP = new Map();
  for (let i = 0; i < array.length; i++) {
    MAP.set(array[i], 0);
  }
  return MAP;
}
