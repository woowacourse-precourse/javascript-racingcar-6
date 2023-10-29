export default function parseArrayToMap(list) {
  const defatulList = [...list];
  const map = new Map();

  defatulList.forEach((carName) => {
    map.set(carName, '');
  });

  return map;
}
