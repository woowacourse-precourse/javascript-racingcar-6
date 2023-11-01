# 📖 배운 내용 📖

## 1. 자동차 이름 입력 받기

<br>

### 1-1. 이름 입력 메세지 출력

- `Class`
  - 객체 지향 프로그래밍에서, 객체를 생성하기 위한 '틀' 또는 '설계도'의 개념
  - 데이터(속성 or 멤버 변수) + 데이터를 조작하는 메서드(함수)를 포함한다
- `Method`
  - 클래스 내에서 정의된 함수
  - 객체가 수행할 수 있는 동작이나 행위
  - 객체의 속성(데이터)을 조작하거나 처리한다
  - '달린다', '멈춘다' 등
- `this 키워드`
  - 현재 객체 또는 현재 컨텍스트를 참조하는 키워드
- `async 와 await`
  - 비동기 처리 패턴으로 어떤 동작의 완료를 기다려야 할 때 사용한다
  - 예를 들어 사용자의 입력을 기다리는 작업등은 시간이 얼마나 걸릴지 모르므로 비동기로 처리한다
  - async - 함수가 비동기로 작동함을 선언한다
  - await - 비동기 동작의 완료를 기다린다
- `readLine(query, callback)`
  - 주어진 질문을 화면에 출력한다
  - 사용자가 답변을 입력할 때까지 기다린다
  - 이후 입력된 답변을 인수로 전달하는 콜백 함수를 호출한다

    ``` javascript
    Console.readLine('닉네임을 입력해주세요.',   (answer) => {
        console.log(`닉네임: ${answer}`);
    });
    ```

- `readLineAsync(query)`
  - 주어진 질문을 화면에 출력한다
  - 사용자가 입력한 답변을 Promise를 통해 반환한다

     ``` javascript
    async function getUername() {
        try{
             const username = await Console.readLineAsync('닉네임을 입력해주세요.');
        } catch (error) {
            // reject 되는 경우
        }
    }
    ```

- `print(message)`
  - 주어진 문자열을 콘솔에 출력한다

    ``` javascript
    async function getUername() {
        try{
             const username = await Console.readLineAsync('닉네임을 입력해주세요.');
        } catch (error) {
            // reject 되는 경우
        }
    }
    ```

<br>

### T-1-1. 이름 입력 메세지 출력 테스트

- `Mocking`
  - 실제 구현을 바꾸지 않고도 테스트의 격리를 보장하고 실행한다
- `Spy`
  - 함수나 메서드가 어떻게 호출되었는지 추적한다
- `Mocking Clear`
  - 각 테스트 사이에서 Mock과 Spy의 상태를 초기화한다
  - 다른 테스트의 결과에 영향을 주지 않기 위한 목적
- `Describe`
  - 관련 테스트들을 그룹화하는데 사용된다
  - 블록 안 테스트들이 특정 클래스나 함수, 기능 등에 관한 것이라는 것을 알려준다
- `Test`
  - 개별 테스트 케이스를 정의한다
  - 첫 번째 인자는 테스트의 이름 또는 설명을 문자열로 받는다
  - 두번째 인자는 테스트 로직을 포함하는 함수를 받는다
- `Expectation`
  - 값에 대한 특정 조건을 설정한다.
