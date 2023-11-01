class Observer {
    #data = new Map();
  
    init(key, value) {
      this.#data.set(key, { data: value, observers: new Set() });
    }
  
    subscribe(key, observer) {
      this.#data.get(key).observers.add(observer);
    }
  
    notify(key) {
      this.#data.get(key).observers.forEach((observer) => observer?.());
    }
  
    set(key, value) {
      this.#data.set(key, { data: value, observers: this.#data.get(key).observers });
      this.notify(key);
    }
  
    get(key) {
      return this.#data.get(key).data;
    }
  }
  
  export default Observer;