//@ts-check

/**
 * @param {string} nameString
 * @returns {string[]}
 */
export function splitNamesFrom(nameString) {
  let names = nameString.split(",");
  names = names.map((name) => name.trim());
  return names;
}
