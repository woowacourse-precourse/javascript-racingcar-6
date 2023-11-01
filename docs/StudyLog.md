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

<br>

### 1-2. 이름 입력 처리

- `this 키워드`
  - 같은 클래스 내부의 다른 메서드나 속성을 접근할 수 있다
  - 인자를 해당 메서드에 넘겨줄 수 있다
- `객체`
  - 데이터와 관련된 기능을 함께 포함하는 항목을 의미
  - 생성의 기원이되는 정보 명시 (X)
  - 모든 객체는 인스턴스 (X)
- `인스턴스`
  - 클래스를 기반으로 생성된 메모리에 할당된 실제 구현체를 의미
  - 클래스 - 쿠키를 만드는 틀
  - 인스턴스 - 그 틀로 만든 실제 쿠키
  - 생성의 기원이 되는 클래스나 프로토타입에 대한 정보 명시 (O)
  - 모든 인스턴스는 객체 (O)
  - 생성 : const 인스턴스명 = new 클래스명(매개변수);

    ``` javascript
    //Dog : 클래스, 설계도나 틀의 기능
    class Dog {
      constructor(name) {
        this.name = name;
      }

      bark() {
        console.log(`${this.name} says mung!`);
      }
    }

    //myDog : Dog 클래스를 바탕으로 실제 개를 생성
    const myDog = new Dog("Bobby");

    //객체를 생성했으므로 bark의 기능 수행 가능
    //출력 : Bobby says mung!
    myDog.bark();
    ```

- `화살표 함수`
  - ES6에서 도입된 새로운 함수 표현 방식
  - 간결한 문법 - 본문이 한 줄인 경우 중괄호 및 'return'문 생략 가능
  - this바인딩 - 자신만의 this를 가지지 않고, 상위 스코프 this 참조
- `전역 객체`
  - 브라우저 : window 객체, 전역으로 선언된 변수나 함수
  - Node.js : global 객체, 명시적으로 할당된 변수나 함수
  - 모든 스코프에서 접근 가능하기 때문에 주의가 필요하다
- `split`
  - 문자열 메서드
  - 특정 구분자를 기준으로 문자열을 여러 부분으로 나누어 배열로 반환한다

    ``` javascript
    const str = "apple,banana,grape";
    const fruits = str.split(',');
    // ["apple", "banana", "grape"]
    ```

- `map`
  - 배열 메서드
  - 배열의 각 요소에 대해 주어진 함수를 호출한다
  - 그 결과로 구성된 새로운 배열을 반환한다
  - 불변성 - 원본 배열을 수정하지 않고 새로운 배열을 반환한다
  - 순회 - 배열의 모든 요소에 대해 주어진 함수를 순서대로 실행한다

<br>

### T-1-2. 이름 입력 처리 테스트

- `matcher`
  - 테스팅 라이브러리에서 제공하는 함수나 메서드
  - 실제 결과와 기대값을 비교하여 테스트의 성공 여부를 결정하는데 사용된다
- `toBe`
  - 기본 타입의 값이 일치하는지 확인한다
- `not`
  - matcher의 반대 결과를 반환한다
  - 주로 두 값이 다른지 확인하고 싶을 때 사용한다
- `toBeTruthy`
  - 값이 boolean에서 true로 평가되는지 확인한다
- `toBeFalsy`
  - 값이 boolean에서 false로 평가되는지 확인한다
- `toContain`
  - 배열이나 문자열이 특정 항목 또는 문자열을 포함하는지 확인한다
