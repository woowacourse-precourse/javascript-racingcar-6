export const CAR_INPUT_PATTERN = /^(\w{1,5})(,\w{1,5})*$/g;
export const CAR_INPUT_DUPLICATE_PATTERN = /(^|,)(\w+),(.+,)?(\2)(,|$)/g;

export const CAR_MOVE_INPUT_PATTERN = /^(0|[1-9]\d*)$/g;

export function validate(str, regex) {
  return str.search(regex) > -1;
}
