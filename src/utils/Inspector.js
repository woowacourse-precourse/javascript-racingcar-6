export default class Inspector {
  async isSplitable(string){
    const splited = await string.replace(/ /g, '').split(',');
    if (splited[splited.length-1] === ''){
      splited.pop();
    }
    if (splited.length < 2) {
      return false;
    }
    if (splited.filter(v => v.length > 5).length !== 0) {
      return false;
    }
    return splited;
  }

  async isNumber(num){
    const regExpNumber = /[0-9]/g;
    if (num.match(regExpNumber)) {
      return Number(num);
    } else {
      return false;
    }
  }
}
