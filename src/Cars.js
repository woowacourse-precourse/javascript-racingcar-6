class Cars {
  #INFO;

  constructor(names) {
    this.#INFO = Cars.initialize(names);
  }

  static initialize(names) {
    return new Map(names.map((name) => {
      const distance = '';
      return [
        name, {
          distance,
        },
      ];
    }));
  }

  get getNames() {
    return [...this.#INFO.keys()];
  }

  getDistanceByName(name) {
    return this.#INFO.get(name);
  }

  movingForwardByName(name) {
    const { distance } = this.#INFO.get(name);
    this.#INFO.set(name, { distance: `${distance}-` });
  }
}

export default Cars;
