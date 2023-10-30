/**
 * @param {string} nameString
 * @returns {string[]}
 */
function splitNamesFrom(nameString) {
  let names = nameString.split(",");
  names = names.map((name) => name.trim());
  return names;
}
