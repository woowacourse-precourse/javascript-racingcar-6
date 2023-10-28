export const inputCarRegex = /^(\w{1,5})(,\w{1,5})*$/g;

export const inputNumberRegex = /^(0|[1-9]\d*)$/g;

export function validate(str, regex) {
  return str.search(regex) > -1;
}
