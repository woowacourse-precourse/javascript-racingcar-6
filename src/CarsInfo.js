class CarsInfo {
  #INFO;

  constructor(names) {
    this.#INFO = CarsInfo.initializeCarNames(names);
  }

  static initializeCarNames(names) {
    return new Map(names.map((name) => [name, { distance: '' }]));
  }

  get names() {
    return Array.from([...this.#INFO.keys()]);
  }

  get ascendingSortedInfo() {
    const shallowCopy = Array.from([...this.#INFO.entries()]);
    return shallowCopy.sort((a, b) => b[1].length - a[1].length);
  }

  movingDistanceOfName(name) {
    const { distance } = this.#INFO.get(name);
    return distance;
  }

  movingForwardSpecificName(name) {
    const { distance } = this.#INFO.get(name);
    this.#INFO.set(name, { distance: `${distance}-` });
  }
}

export default CarsInfo;
