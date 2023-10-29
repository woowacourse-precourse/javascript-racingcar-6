import SETTING from "../constants/setting";

const nameValidator = {
  checkLength: (names) =>
    names.every((name) => name.length <= SETTING.MAX_NAME_LENGTH),
};

export default nameValidator;
