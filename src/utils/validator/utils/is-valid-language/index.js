/**
 * @param {string[]} inputs
 * @param {object} languageOption
 * @property {string} korean
 * @property {string} english
 * @returns {boolean}
 */
export default function isValidLanguage(inputs, languageOption) {
  const { korean, english } = languageOption;
  const pattern = new RegExp(`[^${korean}${english}]+`, 'g');

  return inputs.every((input) => {
    return !pattern.test(input);
  });
}
