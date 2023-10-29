export const filterObjectsByValue = (array, key, value) =>
  array.filter((object) => object[key] === value);

export const findMaxByKey = (array, key) =>
  array.reduce(
    (max, object) => (object[key] > max ? object[key] : max),
    array[0][key],
  );
