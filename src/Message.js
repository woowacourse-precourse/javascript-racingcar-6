class Message {
  static logIf(condition, value) {
    if (condition) throw new Error(value);
  }
}

export default Message;
