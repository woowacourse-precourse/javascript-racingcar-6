//@ts-check

/**
 * @param {string} nameString
 * @returns {string[]}
 */
export function splitNamesFrom(nameString) {
  const names = nameString.split(",");
  return names.map((name) => name.trim());
}

/**
 *
 * @param {string[]} keys
 * @returns {Record<string, number>}
 */
export function makeZeroValuedObjectFromKeys(keys) {
  /** @type {Record<string, number>} */
  const result = {};
  keys.forEach((key) => {
    result[key] = 0;
  });
  return result;
}
