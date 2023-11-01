/**
 * 배열에 constructor의 instance가 아닌 값이 존재하는지 판별합니다.
 * @param {any[]} array
 * @returns {boolean}
 */
export const invalidInstanceElement = (instances, constructor) => {
  const result = instances.some((instance) => !(instance instanceof constructor));
  return result;
};

/**
 * 배열에 중복된 값이 존재하는지 판별합니다.
 * @param {any[]} array
 * @returns {boolean}
 */
export const isDuplicated = (array) => new Set(array).size !== array.length;
