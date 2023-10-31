## constructor

```js
  cars : string[]
  carsNum : number
  carsProgress : number[]
  tryNum : number
```

<hr>

## 기능

### 입출력

- inputCarsWithValidate

  - 쉼표여러개가 연속적으로 작성된 경우 하나로 치환
  - 이름을 쉼표로 구분하여 나열

- inputTryWithValidate

  - 시도횟수 입력
  - number로 변환

- printProgress

  - 이름별 진행도 출력

- printResult

  - 최종 우승자

### 진행

- inputTryNumber 까지 완료 되면 `init`
- n번 반복하여 진행 (재귀로 구현) `run`
  - 매 회차마다 임의값 배열 생성 및 그에 따른 진행도 계산 `computeScore`
  - 매 회차 이름별 진행도 갱신 (4이상의 수가 나오면 +1) `evaluateEachIsForward`
  - 계산 후 출력 `printEachProgress`
- 마무리 `printWinners`

### 마무리

- 최종 우승자들 출력
  - 아무도 전진을 못해서 우승자가 없을 시 "최종 우승자 :" 만 출력

<hr>

## 유효성 검사

- validateInputLength

  - 각 이름이 1이상 5이하의 글자인지 검사

- validateDuplicate

  - 중복된 이름이 없는지 체크

- validateTryNumber

  - 시도 횟수 : 자연수

<hr>

## 폴더 구조

```
src
  /lib
    logs.js
    constants.js
  App.js
  index.js
  util.js
  Validator.js
```

<hr>

## 요구사항

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.

  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.

    ```js
    while (true) {
      // depth : 1
      if (condition) {
        // depth : 2
        //something
      }
    }
    ```

  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.

- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
  - 테스트 도구 사용법이 익숙하지 않다면 **tests**/StringTest.js를 참고하여 학습한 후 테스트를 구현한다.

### refer

```
const arr = Array.from({ length: N }, () => 0);
const arr2 = Array.from({ length: N },()=>Math.random());
```
