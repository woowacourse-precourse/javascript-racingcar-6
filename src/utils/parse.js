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

/**
 * @param {string[]} names
 * @returns {Record<string, number>}
 */
export function makeScoreboardByNames(names) {
  /** @type { Record<string, number> } */
  let res = {};

  for (const name of names) {
    if (name.trim() === "") continue;
    res[name] = 0;
  }

  return res;
}
