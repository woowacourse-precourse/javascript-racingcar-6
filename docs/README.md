

# [FN][JS] 프리코스 2주차 미션 - 자동차 경주
####
***
####
### 구현에 사용할 라이브러리
- `@woowacourse/mission-utils`의 `Random` 및 `Console` API
    - `Random.pickNumberInRange()`: Random 값 추출을 위해 사용
    - `Console.readLineAsync`, `Console.print`: 사용자의 값을 입·출력받기 위해 사용
***
####
## 구현할 기능 목록
- [x] 0에서 9 사이의 무작위 값을 구하는 함수 `generateRandomNumbers`
- [x] 사용자에게 자동차 이름을 부여 받는 함수
- [x] 사용자에게 이동 횟수를 입력 받는 함수
- [x] 경주의 진행 상황을 알려주는 함수
- [x] 경주의 우승자를 알려주는 함수
- [x] 사용자가 잘못된 값을 입력했을 시 발생하는 에러 메시지 발생
***
####
## 구현한 기능 목록
- [x] `AboutCar`, `RacingCar` 클래스를 나누어 메서드를 분리함
- [x] `AboutCar` 클래스
  - 무작위 값을 생성하여 4 이상이면 전진하는 `decideMotion` 메서드
  - `displayPosition` 메서드로 현재 경주 상황을 출력
- [x] `RacingCar` 클래스
  - 사용자에게 입력받은 횟수 만큼 경주를 반복하는 `runRace` 메서드
    - `executeSingleRace` 메서드로 반복 할 때마다 경주 기록 반영
    - `AboutCar` 클래스의 `decideMotion`로 전진인지 정지인지를 반영
    - 경주 종료 후 최종 우승자를 출력함
  - `RoundResult`로 경주를 반복할 때마다 해당 결과를 출력
  - 가장 많이 전진한 값을 찾아 그 값과 동일하게 이동한 자동차를 비교하여 찾음
- [x] `App` 클래스
  - 사용자에게 경주할 자동차 이름과 반복할 횟수를 입력받음
  - 입력받은 자동차 이름과 반복 횟수로 `RacingCar` 클래스의 `runRace` 메서드를 실행



