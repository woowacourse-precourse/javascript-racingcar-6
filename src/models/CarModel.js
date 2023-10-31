class Car{
  constructor(name){
    this.name = name;
    this.movingLength = 0;
  }
  getName(){
    return this.name;
  }
  getMovingLength(){
    return this.movingLength;
  }
}
export {Car}