class Cars {
  #INFO;

  initializeCarNames(names) {
    this.#INFO = new Map(names.map((name) => {
      const distance = '';
      return [
        name, {
          distance,
        },
      ];
    }));
  }

  get getAllNames() {
    return [...this.#INFO.keys()];
  }

  get getAllCarsInfo() {
    return [...this.#INFO.entries()];
  }

  get getCarsInfo() {
    return this.#INFO;
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
