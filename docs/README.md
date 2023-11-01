# 과제 진행 📜

## 구현할 기능 목록

- [x] 사용자로부터 경주 할 자동차 이름 받아오기

  - [x] 쉼표를 기준으로 구분
  - [x] 5자 이하의 이름 사용

  ```
  pobi,woni,jun
  ```

  - [x] 사용자가 잘못된 값을 입력한 경우 예외 발생 후 종료

  ```
  [ERROR] 자동차 이름은 5자 이하여야 합니다.
  ```

- [x] 사용자로부터 경주를 시도할 회차 수 받아오기

  ```
  5
  ```

  - [x] 사용자가 잘못된 값을 입력한 경우 예외 발생 후 종료

  ```
  [ERROR] 시도할 횟수는 숫자여야 합니다.
  ```

- [x] 경주 게임 진행

  - [x] 입력된 회차만큼 반복 진행
  - [x] 각 자동차 마다 0-9 사이 랜덤 숫자 출력. 4 이상일 경우에만 전진
  - [x] 전진 1회는 `-`로 표현
  - [x] 각 회차별 실행 결과 출력

  ```
  pobi : -
  woni :
  jun :

  pobi : --
  woni :
  jun : -
  ```

- [x] 최종 우승자 안내
  - [x] 우승자가 다수일 경우 쉼표를 이용하여 구분
  ```
  최종 우승자 : pobi, jun
  ```

<br><br>

## 실행 결과 예시

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

<br><br>

## 프로그래밍 요구 사항 확인 목록

- [x] Node.js 18.17.1 버전에 실행 가능해야 함
- [x] 프로그램 실행 시작점은 `App.js`의 `play` 메서드
  ```
  const app = new App();
  app.play();
  ```
- [x] package.json 변경 불가 & 순수 Vanila JS 구현
- [x] [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍
- [x] [커밋 메시지 컨벤션 가이드](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)를 참고하여 기능 목록 단위로 커밋
- [x] 프로그램 종료 시 `process.exit()`를 호출하지 않음
- [x] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름 수정 및 이동 금지
- [x] indent depth를 2까지만 허용
- [x] Jest를 이용해서 기능이 정상 동작함을 테스트 코드로 확인
  - `__tests__/StringTest.js` 를 참고하여 학습한 후 테스트 구현
- [x] `@woowacourse/mission-utils`의 `Random` `Console` API를 사용해서 구현
  - 랜덤 값 추출을 위해 `Random.pickNumberInRange()` 활용
  - 사용자 값 입력을 위해 `Console.readLineAsync` 활용
  - 출력을 위해 `Console.print` 활용
