class CarsInfo {
  #INFO;

  /**
   * @param {string[]} names 
   */
  constructor(names) {
    this.#INFO = CarsInfo.initializeCarNames(names);
  }

  static initializeCarNames(names) {
    return new Map(names.map((name) => [name, { distance: '' }]));
  }

  get names() {
    return Array.from([...this.#INFO.keys()]);
  }

  /**
   * @typedef {string} name
   * @typedef {{distance: string}} distance
   * @returns {[name, distance][]} 거리를 기준으로 오름 차순 정렬되어 있는 이름과 거리로 구성되어 있는 배열을 반환한다.
   */
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
