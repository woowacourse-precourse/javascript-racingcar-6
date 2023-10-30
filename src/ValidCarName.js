export function invaildCarName(name){
  const nameLen = name.length;

  if(nameLen < 1 || nameLen > 5) {
    throw new Error("[ERROR] 자동차 이름의 길이가 맞지 않습니다.");
  }
  return true;
}