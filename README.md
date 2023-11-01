# Lv1. 기능 분석

## 기본 입출력 요구사항

> -   입력
> -   자동차 이름 : ,로 구분하며 5자 이하만 가능
> -   반복할 횟수 : n
> -   모든 Input 예외에 대하여 예외 발생 후 프로그램 종료
>     </br></br>
> -   출력 - 안내메시지 - 자동차 이름 요청 메시지 : "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
> -   반복할 횟수 요청 메시지 : "시도할 횟수는 몇 회인가요?"
> -   최종 우승자 안내 메시지(2명 이상일 경우) : "최종 우승자 : Apple, Banana"
> -   최종 우승자 안내 메시지(1명인 경우) : "최종 우승자 : Apple"
> -   피드백 : 이름과 '-'로 진행상황 표시
>     -   이름1 : -
>     -   이름2 : --
>     -   이름3 : ----
>         </br>

## 게임 진행

> -   [x] 게임 시작
> -   경주할 자동차 이름 요청
> -   반복할 횟수 요청
>     </br></br>
> -   [x] 자동차 이름 출력
> -   [x] 전진할 시 '-' 하나 추가
>         </br></br>
> -   [x] 게임 종료
> -   [x] 반복이 종료되면 게임 종료
> -   [x] 가장 많은 '-' 진행을 한 자동차 출력
>         </br>

## 우승자 확인

> -   [x] 각각의 자동차 스코어를 저장할 배열 생성
> -   [x] 각각의 자동차마다 '-'의 총 길이를 해당하는 인덱스에 저장
> -   [x] 가장 높은 스코어를 가진 값 출력(둘 이상일 시 차례대로 출력)

## 추가기능

> -   [x] 예외처리 세분화 : 길이/타입 에러로 분리

## LV.2 설계

## 🕹️ GameManager

프로그램의 전체적인 흐름을 처리하는 클래스

> ### variables
>
> -   `bool` `_isPlaying = True` : 게임 시작 조건
> -   `Board` `_board` : 게임판
>
> ### functions
>
> -   `play` `()` : 프로그램 실행
>     -   `while (_isPlaying)`
>     -   `this.startGame()` : 게임 시작
>     -   `this.playGame()` : 게임 진행
>     -   `this.finishGame()`: 게임 종료
>         </br></br>
> -   `_startGame` `()` : 게임시작
>     -   `Strings.START` : 게임 시작 메시지
>     -   `this.board = new Board()` : 새로운 게임판 생성
>         </br></br>
> -   `_playGame` `()` : 게임 진행
>     -   `Strings.REQUEST_NAME` : 자동차 이름 요청 메시지
>     -   `board.getCarName()` : 자동차 이름 입력
>     -   `Strings.REQUEST_REPETITION` : 반복 횟수 요청 메시지
>     -   `board.getRepetitionTime()` : 반복 횟수 입력
>     -   `board.printFeedback()` : 피드백 출력
>         </br></br>
> -   `_finishGame` `()` : 게임 종료
>     -   `Strings.WINNER` : 우승자 안내 메시지

</br>

## 🎮 Board

게임의 진행을 담당하는 클래스

> ### Const
>
> -   `carName` `[]`: 자동차 이름들을 저장할 배열
>     </br></br>
>
> ### Functions
>
> -   `constructor` `()` : 생성자
>     -   `setRacingBoard` : 자동차 이름과 진행상황 출력
>         </br></br>
> -   `setRacingBoard` `()` : 자동차 배열과 결과값 같이 출력
>     </br></br>
> -   `getCarName` `()` : 자동차 이름 입력
>     -   `this.carName = carName.push(name)` > </br></br>
> -   `checkRacingWinner` `()` : 피드백 생성
>     `winner` = `carName.compare()` : 우승자
>     -   this.feedback = new Feedback(winner)
>         </br></br>
> -   `printFeedBack` `()` : 피드백 출력
>     -   `feedback.print()`

</br>

## 🏎️ Names

자동차의 이름을 저장하고 유효성 검사를 수행하는 클래스

> ### CarNames
>
> -   `Name` `length` : 자동차 이름 길이
> -   `String` `value` : 현재 객체의 값>
>     </br></br>
>
> ### Functions
>
> -   `constuctor` `String value` : 생성자
>     -   `value !== null` : 사용자 추측 객체 생성 - `this.validate(value)` : 유효성 검사 - `this.value = value` > </br></br>
> -   `validate` `(String value)` : 유효성 검사
>     -   `this.checkLength(value)` : 길이 검사
>         </br></br>
> -   `Name` `countScores` `target?` : '-'의 길이를 각각 측정해서 점수 카운팅
>     </br></br>
> -   `String` `getScore` `()` : score의 getter

</br>

## 📘 Feedback

경주 결과에 대한 피드백을 처리하는 클래스

> ### Members
>
> -   `string` `feedback` > </br></br>
>
> ### Functions
>
> -   `consturctor` `(name)` : 생성자
>     -   'this.name = name;
>     -   `this.makeFeedBack()`
>
> </br></br>
>
> -   `makeFeedBack` `()` : 피드백 문자열 생성
>     </br></br>
> -   `print` `()` : 피드백 출력

</br>

## 💬 Strings

프로그램에서 사용되는 문자열을 포장, 관리

> ### Members
>
> -   `SPACE` : ' '
> -   `START`: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
> -   `REPETITION` : '시도할 횟수는 몇 회인가요?'
> -   `RESULT` : '실행 결과'
> -   `ERROR_INPUT_LEGNTH` : '\[Error] Invalid input value. The length is incorrect.'

## 🚀 기능 요구 사항

-   주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
-   각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
-   자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
-   사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
-   전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
-   자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
-   우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
-   사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.
    ```
    예시) [ERROR] 숫자가 잘못된 형식입니다.
    ```

### 입출력 요구 사항

#### 출력

```

#### 실행 결과 예시

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

````

---

## 🎯 프로그래밍 요구 사항

-   프로그램 종료 시 `process.exit()`를 호출하지 않는다.
-   프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
-   프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

### 추가된 요구 사항

-   indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
    -   예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
    -   힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
-   Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
    -   테스트 도구 사용법이 익숙하지 않다면 `__tests__/StringTest.js`를 참고하여 학습한 후 테스트를 구현한다.

### 라이브러리

-   `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
    -   Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
    -   사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.

#### 사용 예시

-   0에서 9까지의 정수 중 한 개의 정수 반환

```javascript
MissionUtils.Random.pickNumberInRange(0, 9);
````

## ✏️ 과제 진행 요구 사항

-   **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.
-   **Git의 커밋 단위는 앞 단계에서 `docs/README.md`에 정리한 기능 목록 단위**로 추가한다.
    -   [커밋 메시지 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 가이드를 참고해 커밋 메시지를 작성한다.
