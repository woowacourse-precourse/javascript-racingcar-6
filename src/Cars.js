export default class Cars {
  obj = {};
  constructor(input) {
    input.split(",").forEach(v=>this.obj[v]= 0);
    this.len = input.split(",").length;
  }

  move_cars(moves) {
    Object.keys(this.obj).forEach((item,i) => {
      if(moves[i] >= 4) this.obj[item]++;
    });
  }
}