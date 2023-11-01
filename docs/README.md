# 📢 커밋 컨벤션 정의

- 모든 커밋은 기능단위로 커밋 (필요한 기능 목록에 맞게)
  <img width="564" alt="image" src="https://github.com/won0104/javascript-racingcar-6/assets/98508955/287de4fc-2d1c-4f0a-b3de-217907bc97f1">
- test : test코드 추가

# ⚠️ 추가된 요구사항

- indent depth가 3이 넘지 않도록 구현
  → eslint에서 max-depth를 추가로 정의
- Jest를 사용해 본인이 정리한 기능 목록이 정상 동작하는지 테스트 코드로 확인한다.

# ✋ 필요한 기능

- [x] N대의 자동차가 전진, 멈춤
- [x] 사용자가 자동차에 이름 부여
- [x] 전진하는 자동차 출력 (이름과 함께 )
  - 자동차 이름은 쉼표 기준 구분, 이름은 5자 이내
- [x] 사용자가 몇번의 이동을 할지 입력
- [x] 전진 조건 랜덤으로 정하기
  - 전진 조건 : 0~9 까지 무작위 값, 무작위 값이 4 이상일때 한칸 전진
- [x] 전진 조건에 부합한지 확인하기
- [x] 게임 끝난 뒤 우승자 알려주기
  - 1명 이상가능. 여러명이면 쉼표로 구분
- [x] 에러 처리하기
  - 잘못된 값을 입력하면 throw문을 사용해 [ERROR]로 시작하는 메시지의 예외 발생
- [x] 사용자 입력값의 유효성 검증
  - 이름이 1자 이상 5자 이내 (쉼표로 구분)
  - 시도 횟수 입력에 숫자 대신 다른 것 입력

# 🎯 기능 명세서

## 📁Utils

### L Validator.js

- 사용자 입력값의 유효성 검증
  - [x] 이름이 1자 이상 5자 이내 (쉼표로 구분)
  - [x] 시도 횟수 입력에 숫자 대신 다른 것 입력

### L Define.js

- 상수 값을 정의

## 📁Errors

### L Errors.js

- 예외 처리
  `예시) [ERROR] 숫자가 잘못된 형식입니다.`
  - [ ] 사용자 입력값 유효성 에러 (이름 1~5자)
  - [ ] 시도 횟수 입력에 숫자 대신 다른것 입력
  - [ ] 랜덤 출력 에러
  - [ ] 차차 추가

## 📁view

### L InputView.js

- [ ] 사용자로부터 입력값을 받음
  - 코드
    ```java
    import { Console } from '@woowacourse/mission-utils';

    import Validator from '../utils/Validator.js';

    const InputView = {
      async readLineAsync(message) {
        const userInput = await Console.readLineAsync(message);
        Validator.validateUserInput(userInput);

        return userInput;
      },
    };

    export default InputView;
    ```

### L OutputView.js

- [ ] 결과를 출력
  - 코드
    ```java
    import { Console } from '@woowacourse/mission-utils';

    const OutputView = {
      print(message) {
        Console.print(message);
      },
    };

    export default OutputView;
    ```

### L View.js

- input과 Output을 관리하는 전체 (사용자에게 경주할 자동차의 이름, 횟수를 입력받음 / 경주가 끝난 후 자동차 이름 출력, 자동차 이름과 전진상태 출력)
- [ ] 사용자에게 경주할 자동차의 이름을 입력받음
  ```
  경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
  pobi,woni,jun
  ```
- [ ] 사용자에게 경주 횟수를 입력받음
  ```
  시도할 횟수는 몇 회인가요?
  5
  ```
- [ ] 경주가 한 판이 끝난 후 자동차 이름, 전진 상태 출력
  ```
  실행 결과
  pobi : -
  woni :
  jun : -
  ```
- [ ] 최종 우승자 출력
  ```java
  최종 우승자 : pobi, jun
  ```

## 📁Domain

### L Car.js

- 자동차 객체를 나타냄, 자동차의 이름, 이동거리

### L RacingGame.js

- 게임의 전반적인 내부 진행
- [ ] 게임 상태 초기화
- [ ] 전진 조건 랜덤 생성
- [ ] 각 차들의 전진 여부 판단
- [ ] 차를 이동시킴

### L RacingUmpire.js

- [ ] 각 라운드의 경주 결과를 기록하고, 현재 라운드 증가
- [ ] 현재 라운드의 게임 종료 여부 판단
- [ ] 우승자 판별해 반환

## ✅ 제출 직전 확인하기

- [ ] 공백 확인하기
- [ ] 컨벤션 최종 확인하기
- [ ] 요구사항 모두 만족했는지 마지막 확인
- [ ] EOL 확인하기
- [ ] console.log 지웠는지 확인
- [ ] 자바스크립트에서 제공하는 API가 아닌지 확인해보기
- [ ] 의미없는 주석 확인
- [ ] 깃 파일 확인하기
