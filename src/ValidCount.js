export function validCount(count){
  const numCount = Number(count);
  if(!(/^\d+$/.test(numCount)) || numCount <= 0){
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return true;
}