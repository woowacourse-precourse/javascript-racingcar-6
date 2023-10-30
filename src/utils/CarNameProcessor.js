export default function processCarNames(carNamesString) {
  const namesArray = carNamesString.split(',');
  return namesArray.map((name) => name.trim());
}
