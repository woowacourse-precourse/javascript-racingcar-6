## 과제 기능 목록

0. class constructor에 필요한 변수 선언

   - `cars = {key: value}` : key는 자동차 이름, value는 자동차 객체

1. `verifyAndInitCars(userInputCarNames)`: 자동차 이름 유효성 검사 후 자동차 객체 생성

   - 자동차 이름이 5자 이하인지 검사한다
   - 이름이 1자 이상인지 검사한다
   - 이름에 중복은 없는지 검사한다
   - 위 테스트들을 통과하면 객체에 자동차명과 위치를 초기화한다

2. `verifyAndSetTryOut(userInputTryOut)`: 이동 횟수 유효성 검사 후 횟수 설정

   - 입력이 숫자가 맞는지 검사한다
   - 1 이상의 숫자인지 검사한다
   - 위 테스트들을 통과하면 횟수를 설정한다

3. `getRandomNumber()`: 0~9 사이 임의의 값을 생성한다

4. `isMoveCar()` : `getRandomNumber()`의 값이 4 이상이면 true, 아니면 false를 반환한다

5. `moveCars()` : 자동차 객체의 위치를 이동시킨다

   - `isMoveCar()`의 값이 true이면 자동차 객체의 위치를 1 증가시킨다

6. `drawDash(value)` : 주어진 value만큼 '-'를 출력한다

7. `displayResultSteps()` : `drawDash`를 사용해 현재 자동차들의 위치를 출력한다

8. `displayWinner()` : 우승자를 가리는 기능
