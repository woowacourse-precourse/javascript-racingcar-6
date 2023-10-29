const throwError = (message, condition = true) => {
  if (condition) throw new Error(message);
};

export default throwError;
