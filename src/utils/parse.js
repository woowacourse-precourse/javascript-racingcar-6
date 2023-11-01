//@ts-check

/**
 * @param {string} nameString
 * @returns {string[]}
 */
export function splitNamesFrom(nameString) {
  const names = nameString.split(",");
  return names.map((name) => name.trim());
}
