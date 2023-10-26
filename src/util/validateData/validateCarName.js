function validateCarNames(names) {
  if (names.length > 5) {
    throw new Error("[ERROR]");
  }
  return;
}

export default validateCarNames;
