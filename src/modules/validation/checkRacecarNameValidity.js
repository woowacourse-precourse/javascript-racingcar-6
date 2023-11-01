import { num } from '../../Constants';

async function checkRacecarNameValidity(names) {
  const isProperLength = names.every((item) => item.length <= num.NAME_LENGTH_LIMIT);

  const isNotEmpty = names.every((item) => item.length > 0);

  const isWithoutSpaces = names.every((item) => !item.includes(' '));

  const isWithoutRecurrences = names.length === [...new Set(names)].length;

  return isProperLength && isNotEmpty && isWithoutSpaces && isWithoutRecurrences ? true : false;
}

export default checkRacecarNameValidity;
