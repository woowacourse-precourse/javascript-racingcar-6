/**
 * @param {string[]} input
 * @param {object} LANGUAGE_OPTION
 * @param {string} LANGUAGE_OPTION.korean
 * @param {string} LANGUAGE_OPTION.english
 * @returns {boolean}
 */
export default function isValidLanguage(input, LANGUAGE_OPTION) {
  const pattern = new RegExp(`[^${LANGUAGE_OPTION.korean}${LANGUAGE_OPTION.english}]`);
  return input.every((name) => !pattern.test(name));
}
