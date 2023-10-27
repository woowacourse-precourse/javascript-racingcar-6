export default class Inspector {
  isSplitable(string){
    const splited = string.split(',');
    if ( splited.length >= 2 && splited.filter(v => v.length > 5).length === 0 ){
      return true;
    } else {
      return false;
    }
  }

  isNumber(num){
    const regExpNumber = /^[0-9]$/g;
    return num.match(regExpNumber);
  }
}