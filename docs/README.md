# 자동차 경주 게임
## 🚀우테코 프리코스 2주차 과제 - 기능 목록

## 🔍기능 1) 랜덤 숫자 생성
- `@woowacourse/mission-utils`의 `Random` 및 `Console API`를 사용하여 구현
- Random 값 추출은 `Random.pickNumberInRange()`를 활용
```javascript
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```
## 🔍기능 2) 경주 자동차 이름 입력 & 예외 처리
- 사용자 숫자 입력
  **`readLineAsync(query)`**
- 주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환
- 자동차 이름이 **6자 이상**일 경우 예외 처리
```
경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)
inhwa,pobi
```

## 🔍기능 3) 경주 횟수 입력 & 예외 처리
- 사용자 숫자 입력
  **`readLineAsync(query)`**
- 주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환
- 매치 횟수 입력이 **숫자가 아닌 경우** 예외 처리
```
시도할 횟수는 몇 회인가요?
4
```

## 🔍기능 4) 경주 결과 계산 & 출력
- 컴퓨터 랜덤 숫자가 **4 이상**인 경우 COUNT 점수 +1
```javascript
if (Number(COM_RANDOM_NUM[j])>=4){
  COUNT_NUM[j]+=1;
}
```
- COUNT 횟수 만큼 자동차 전진 결과 출력
```javascript
for(let j=0; j<USER_NAME.length; j++){
  let test ='-';
  Console.print(USER_NAME[j] +" : "+test.repeat(COUNT_NUM[j]));
}
```
```
실행 결과
inhwa : -
pobi : -

inhwa : --
pobi : -

inhwa : ---
pobi : --

inhwa : ----
pobi : ---
```

## 🔍기능 5) 최종 우승자 출력
- COUNT 수가 가장 큰 자동차 탐색 후 최종 우승자 출력
```javascript
for(let y=0; y<COUNT_NUM.length; y++){
  if (COUNT_NUM[y]==max){
    WINNER_MEMBER.push(USER_NAME[y]);
  }
}
Console.print('최종 우승자 : ' + WINNER_MEMBER.map((member) => member).join(','));
```
```
실행 결과
inhwa : -
pobi : -

inhwa : --
pobi : -

inhwa : ---
pobi : --

inhwa : ----
pobi : ---

최종 우승자 : inhwa
```



