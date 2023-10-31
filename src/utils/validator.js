export const invalidInstanceElement = (instances, constructor) => {
  const result = instances.some((instance) => !(instance instanceof constructor));
  return result;
};

export const isDuplicated = (array) => new Set(array).size !== array.length;
