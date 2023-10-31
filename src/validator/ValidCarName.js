export function vaildCarName(name){
  const nameLen = name.length;

  if(nameLen < 1 || nameLen > 5) { // 길이가 1보다 작고 5보다 큰 경우
    throw new Error("[ERROR] 자동차 이름의 길이가 맞지 않습니다.");
  }
  return true;
}