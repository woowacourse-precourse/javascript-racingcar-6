# 🏎️ 미션 - 자동차 경주

## 🎨 WorkFlow 작성

![image](https://github.com/livable-final/client/assets/83483378/4b8c2989-dab4-4847-a50c-536c223f5bad)

## 🚀 기능 구현 목록

✅ 경주할 자동차 이름의 입력을 받는다. (입력: `views/InputView`)

- 입력 값에 대한 유효성 검사를 한다. (유효성 검사: `models/CarNamesValidator`)

  - [x] 쉼표를 기준으로 나눈 입력이 **1 이상 5 이하**인가? 👉🏻 **_`isValid()` 내 input의 유효성 검증_**
    - [x] 이름의 길이가 5를 초과한 경우 `#hasExceedingLength()`
    - [x] 빈 문자열인 경우 (1 미만) `#hasEmptyName()`
    - [x] 쉼표(`,`)만 입력한 경우 `#hasEmptyName()`
    - [x] 중복된 이름을 입력했을 경우 `#hasDuplicateName()`
    - [x] 입력된 이름이 하나일 경우 `#isInvalidNameCount()`
  - [x] 입력의 공백은 어떻게 처리할 것인가? 👉🏻 **_1. 공백 입력은 예외처리 2. 글자 사이 의도된 공백은 5자 초과 여부에 따름_**
  - [x] 테스트 코드를 통해 검증한다. 👉🏻 **_`CarNameTest.js`로 테스트 코드 작성 및 테스트 완료_**
  - [x] 가이드 메시지와 에러 메시지 상수화를 진행한다. 👉🏻 **_`constants.js` 내 `GUIDE_MESSAGES`, `ERROR_MESSAGES` 생성_**

- 입력받은 자동차 이름들을 저장한다.

  - [x] 자동차 이름과 스코어를 스코어보드로 관리한다. 👉🏻 `model/Score.getBoard()`

  ```javascript
  // 초기 스코어보드 상태

  [
    ['pobi', 0],
    ['woni', 0],
    ['jun', 0],
  ];
  ```

✅ 시도할 횟수 입력을 받는다.

- 입력 값에 대한 유효성 검사를 한다. (유효성 검사: `models/LapsValidator`)
  - [x] 입력의 type이 `Number`인가? `#isInvalidType()`
  - [x] 입력이 **1 이상**인가? `#isInvalidNumberRange()`
  - [x] 입력이 두 자릿수인 경우, 자릿 수 사이에 공백을 입력했다면 어떻게 처리할 것인가? 👉🏻 공백을 제거하여 두 자릿수로 판별
  - [x] 테스트 코드를 통해 검증한다.
  - [x] 상수화를 진행한다.

✅ 지정된 횟수만큼 레이싱을 진행한다.

- '실행 결과'를 출력한다. (출력: `OutputView`)

  - [x] 상수화를 진행한다.

- 입력받은 시도할 횟수를 반복하는 메소드를 구성한다.

  - [x] 경주에 참가한 자동차 대수만큼 전진을 위한 무작위 값을 구한다. `randomNumberGenerator.js`
  - [x] 전진 조건에 해당하면 해당 자동차의 해당하는 스코어 보드에 더해간다. `model/Race.js`

    - [x] 0에서 9까지의 정수 중 한 개의 정수를 무작위로 불러온다. `#gasStation()`
    - [x] 무작위 수가 4 이상일 경우 전진한다. `#getBooster()`

    ```javascript
    [
      ['pobi', 3],
      ['woni', 2],
      ['jun', 1],
    ];
    ```

  - [x] 1회의 차수가 끝나면 점수를 `dash`로 변환하여 출력한다. `showBoard()`
  - [x] 위 로직을 시도할 횟수만큼 반복한다. `racing()` while(laps)를 통해 반복
  - [x] 테스트 코드를 통해 검증한다. `RaceTest.js`
  - [x] 상수화를 진행한다.

✅ 실행 결과를 발표한다.

- 모든 경주가 끝나면 결과를 발표한다. 👉🏻 (출력: `OutputView`)
  - [x] 배열을 순회하면서 각 배열의 1번째 인덱스 요소를 기준으로 내림차순 정렬한다.
  - [x] 단독 우승일 경우 단독 우승자를 출력한다. 👉🏻 `최종 우승자 : pobi`
  - [x] 공동 우승일 경우 쉼표를 기준으로 출력한다. 👉🏻 `최종 우승자 : pobi, jun`
  - [x] 테스트 코드를 통해 검증한다. 👉🏻 `__tests/AwardsTest.js`
  - [x] 상수화를 진행한다.

✅ 모든 테스트를 통과한다.

- [x] ApplicationTest
- [x] AwardsTest
- [x] CarNameTest
- [x] LapTest
- [x] RaceTest
- [x] StringTest

---

## 🔍 실행 결과 예시 분석 및 모듈 분리

```javascript
/**
/* 자동차 이름 입력 Console.readLineAsync <입력 뷰>
/* 입력에 대한 유효성 검사 진행 [유효성 검사 모델]
/* 입력 받은 자동차를 담는 배열 생성 {자동차 경주 모델}
/* 만약 자동차 이름이 중복이라면? 👉🏻 기능 요구 사항에 이름 중복에 관련한 사항은 없다.
/* 그러나, 단독 우승 시,
 */
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun

/**
/* 자동차 이름 입력 Console.readLineAsync <입력 뷰>
/* 입력에 대한 유효성 검사 진행 [유효성 검사 모델]
 */
시도할 횟수는 몇 회인가요?
5


// '실행 결과' 출력 Console.print <출력 뷰>
실행 결과

/**
 * 시도할 횟수 만큼 반복분 순회
 * 랜덤 숫자 생성 [무작위 숫자 생성 모델]
 * 랜덤 숫자에 따른 점수(전진, 정지) 계산 {자동차 경주 모델}
 */
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

/**
 * 최종 우승자 목록 판별 {모델}
 * 우승자 목록에 따른 쉼표 구분으로 우승자 출력 {Output 모델}
 */
최종 우승자 : pobi, jun
```

## 리팩토링 진행 목록

✅ phase-1

1. 객체로 선언하던 스코어보드 배열로 순서 보장

- [x] 스코어보드 최초 할당 시 객체가 아닌 배열로 관리
- [x] 배열 내 요소 접근 시 구조 분해를 통해 코드 가독성 증진
- [x] 사용자의 입력을 담당하는 `InputView`에서 수정

2. `Race` class의 책임 명확화

- [x] 스코어보드를 책임하는 로직은 `Score` class로 이관
- [x] `Race` 클래스 내 `racing()` 메소드의 단일 책임화
- [x] 구조분해한 상수를 담기 위한 불필요한 변수 선언 최소화

3. 코드 내 사용되는 `-`, `,`와 같은 symbol를 관리하는 상수 파일 추가

- [x] `constants/symbols.js` 추가
- [x] `constatns/messages.js` 내에서 관리하던 symbol 이관

4. 테스트 코드 수정

- [x] `RaceTest.js` 내 테스트 코드 수정

✅ phase-2

1. 상수로 관리하는 에러메시지 하드코딩 지양

- [x] `[ERROR]` prefix 설정
- [x] 고유 에러 객체 생성
- [x] `InputError` 클래스를 통해 커스텀한 에러 클래스 추가

2. `InputValidator.js` 내 예외 처리 로직 수정

- [x] 기존 자동차 이름과 시도할 횟수 입력을 담당하던 클래스 책임 분리
- [x] 자동차 이름 입력에 대한 예외 처리 수정 `CarNamesValidator` 클래스
- [x] 시도할 횟수 입력에 대한 예외 처리 수정 `LapsValidator` 클래스
- [x] 중복 입력에 대한 예외처리 수정
- [x] 추가 예외 사항 고려

3. 자동차 이름과 시도할 횟수에 입력된 의도된 공백

- [x] `po bi`와 같은 의도된 공백이 포함된 자동차 이름은 허용
- [x] `1   3`과 같은 의도된 공백이 포함된 경주 횟수는 불허 -> `13`으로 처리

---

## 최종 파일 구조

![image](https://github.com/FastSubTeam/front/assets/83483378/4c56b064-7506-48be-9d97-6f455f41e98e)
