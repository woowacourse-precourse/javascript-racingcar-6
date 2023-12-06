import { RULE } from './Rule.js';

const NAME_REGEXP = new RegExp(
  `^[가-힣a-zA-Z0-9]{${RULE.name.min},${RULE.name.max}}$`
);
const ROUND_REGEXP = new RegExp(`^([1-9]{1}|[1][0])$`);

export { NAME_REGEXP, ROUND_REGEXP };
