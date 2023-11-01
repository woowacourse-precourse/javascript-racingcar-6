class Car {
    constructor(name) {
      this.name = name;
      this.position = 0;
    }
  
    move(randomNumber) {
      if (randomNumber >= 4) {
        this.position += 1;
      }
    }
  
    results() {
      return `${this.name} : ${"-".repeat(this.position)}`;
    }
  }
  
  export default Car;
 