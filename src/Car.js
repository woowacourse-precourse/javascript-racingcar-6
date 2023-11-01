export default class Car {
    constructor(name) {
      this.validateName(name);
      this.name = name;
      this.position = 0;
    }
  
    validateName(name) {
      if (name.length === 0 || name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.');
      }
    }
  
    move() {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        this.position++;
      }
    }
  }