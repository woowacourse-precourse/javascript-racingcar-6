import SETTING from "../constants/setting";

const nameValidator = {
  checkLength: (names) =>
    names.every((name) => name.length <= SETTING.MAX_NAME_LENGTH),
  checkDuplicateNames: (names) => names.length === new Set(names).size,
};

export default nameValidator;
