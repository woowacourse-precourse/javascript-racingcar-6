//기능1. 자동차 이름
export function carname(input) {
  //입력조건
  // map은 for의 기능 : v를 반복하여 공백을 다 제외
  const car = input.split(',').map((v) => v.trim());
  //예외처리
  if (
    //filter는 for~if의 기능+새로운 배열에 저장
    car.filter((v) => v.length > 5).length !== 0 || //요소의 길이가 5이상이면 배열이 1개이상 만들어지니 배열의 길이가 0이 아님(식 성립)
    car.filter((v) => v === '').length > 0 || //아예 빈값(그냥 위의 trim만 쓰면 빈칸을 ''로 인식)(식 성립)
    [...new Set(car)].length !== car.length //Set()의 길이와 원래 입력의 길이가 다를때(식 성립)
  ) {
    throw new Error('[ERROR] 올바른 이름을 입력해주세요');
  }
  return car;
}
