const checkLength = (name) => {
  if (name.length > 5) {
    throw new Error("[ERROR]");
  }

  return true;
};

const checkSeparator = (inpuut) => {
  if (inpuut.includes(",")) {
    return true;
  }

  return false;
};

export { checkLength, checkSeparator };
