const REGEXP = {
  VEHICLE: {
    INPUT_CHARACTER_CHECK_REGEXP: /^[a-zA-Z]+([,a-zA-Z]+)*$/,
    INPUT_FORMAT_CHECK_REGEXP: /^[a-zA-Z]+(,[a-zA-Z]+)*$/,
    NAME_LENGTH_CHECK_REGEXP: /^[a-zA-Z]{1,5}(,[a-zA-Z]{1,5})*$/,
    MINIMUM_VEHICLE_NUM_CHECK_REGEXP: /^[a-zA-Z]{1,5}(,[a-zA-Z]{1,5})+$/,
  },
  ROUND: {
    INPUT_FORMAT_CHECK_REGEXP: /^\d+$/,
  },
};

export default REGEXP;
