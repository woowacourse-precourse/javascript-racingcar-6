import SETTING from "../constants/setting";

const nameValidator = {
  checkLength: (names) =>
    names.every((name) => name.length <= SETTING.maxNameLength),
  checkDuplicateNames: (names) => names.length === new Set(names).size,
};

export default nameValidator;
