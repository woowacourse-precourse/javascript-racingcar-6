class View {
    constructor({ model }) {
      this.model = model;
      this.model?.subscribe(model.name, this.print.bind(this));
    }
  
    print() {
      throw new Error("print 메서드를 구현해야 합니다.");
    }
  }
  
  export default View;