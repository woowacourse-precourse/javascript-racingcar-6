class Participant {
  constructor(input) {
    this.input = input.split(",");
  }

  validate() {
    if (this.errorCheck()) throw new Error("[ERROR]");
    return true;
  }

  errorCheck() {
    return (
      this.validateUserCnt() ||
      this.validateUserNameLength() ||
      this.validateIsName() ||
      this.isDuplicate()
    );
  }

  validateUserCnt() {
    return this.input.length === 0;
  }

  validateUserNameLength() {
    let check = false;
    this.input.forEach((user) => {
      if (user.length > 5 || user.length < 1) check = true;
    });
    return check;
  }

  validateIsName() {
    const regex = /^[가-힣|a-z|A-Z|]/;
    let check = false;
    this.input.forEach((userName) => {
      userName.split("").forEach((user) => {
        if (!regex.test(user)) check = true;
      });
    });
    return check;
  }

  isDuplicate() {
    return this.input.length !== [...new Set(this.input)].length;
  }
}
export default Participant;
