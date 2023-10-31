import { Console } from "../../utils/console/console.js";

class Log {
  #logs;
  #maxIdx;
  constructor(maxIdx = 100) {
    this.#logs = [];
    this.#maxIdx = maxIdx;
  }

  push(log) {
    this.#logs.push(log);
    if (this.#logs.length >= this.#maxIdx) {
      this.flush();
    }
  }

  flush() {
    Console.print(this.#logs.join("\n"));
    this.#logs = [];
  }
}

export default Log;
