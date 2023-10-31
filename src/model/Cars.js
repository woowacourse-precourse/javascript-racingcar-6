class Cars {
  constructor() {
    this.list = [];
    this.times = 0;
  }

  setList(list) {
    const tempList = [];
    list.forEach((name) => {
      tempList.push({
        name,
        distance: '',
      });
    });
    this.list = [...tempList];
  }

  setTimes(times) {
    this.times = times;
  }
}

export default Cars;
