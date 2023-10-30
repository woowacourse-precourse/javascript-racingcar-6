export const Car = {
  createCars: (carName) => {
    return carName.map((name) => {
      return { name: name, race: "" };
    });
  }
};