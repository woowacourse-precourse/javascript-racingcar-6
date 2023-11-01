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

<br>

### 1-3. 이름 입력 예외 처리

- `Set의 개념`
  - ES6에서 도입된 데이터 구조
  - 유일한 값만 저장되는 컬렉션으로 중복을 허용하지 않는다
- `Set의 특징`
  - 값은 유일하게 하나만 존재한다
  - 각 요소는 순서를 가지지 않는다
  - 배열과 유사하지만 중복을 허용하지 않는다는 점이 주요 차이점이다
- `중복체크와 Set`
  - 배열에 중복되는 이름이 있다면, Set으로 변환했을때의 길이와 원래 배열의 길이가 달라진다
  - Set은 중복을 허용하지 않기 때문에 중복 값을 제거하게 된다
  - 따라서 두 길이를 비교함으로써 원래 배열에 중복 요소가 있는지 확인할 수 있다
- `_언더스코어, #`
  - 일반적으로 private 또는 내부에서만 사용되는 메서드나 변수를 나타내기 위해 사용된다
  - 즉 변수나 메서드를 외부에서 접근하거나 사용하면 안된다는 의미를 전달한다
  - JavaScript에는 private키워드 대신 컨벤션으로 언더스코어를 사용해왔다
  - ES6부터는 #을 사용하여 private필드를 정의할 수 있게되었지만 많은 개발자들은 여전히 언더스코어 컨벤션을 사용한다.
  - 에어비앤비 스타일 가이드는 언더스코어를 붙이는 것을 권장하지 않는다

<br>

### T-1-3. 이름 입력 예외 처리 테스트

- `Private 메서드 테스트`
  - Priavate 메서드는 직접 테스트 할 수 없다
  - 간접적으로 public 메서드를 사용하여 테스트해야한다
  - 특히 private 메서드에 영향을 받는 public 메서드를 통해 그 효과를 확인 할 수 ㅣ있다
- `비동기 에러 처리 테스트`
  - await expect(...).rejects.toThrow(...) 구문을 사용한다

    ``` javascript
    test("비동기 에러 예상하기", async () => {
      await expect(asyncFunction()).rejects.toThrow("예상되는 에러 메시지");
    });
    ```

  - 이를 통해 비동기 함수가 특정 에러를 반환하는지 테스트 할 수 있다
  - 결론적으로, 직접적인 방법으로 테스트 할 수 없는 코드나 상황들에도 간접적인 방법을 통해 코드의 품질을 확보할 수 있다

<br>

---

## 2. 시도 횟수 입력 받기

<br>

### 2-1. 시도 횟수 입력 메세지 출력

- `parseInt`
  - 문자열을 정수로 변환하는 함수
  - 사용자에게 숫자를 입력받도록 요청하더라도, 반환값은 문자열 형태가 된다
  - 그렇기 때문에 문자열을 실제 정수로 사용하기 위해, parseInt함수가 쓰인다
  - 형식은 다음과 같다

    ``` javascript
    parseInt(string, radix);
    ```
  
  - String - 변환될 문자열
  - radix - 기수, 문자열이 표시되는 진수를 나타내는 2에서 36사이 정수이다
  - ex) 10은 parseInt의 두 번째 인자로, 10진수로 변환하라는 의미이다
  - radix를 생략하면 문자열에 따라 다른 진수를 사용한다
  - 0x 또는 0X - 16진수로 간주
  - 0o - 8진수로 간주
  - 나머지 경우 - 기본적으로 10진수로 간주
  - 하지만 예상치 못한 결과를 방지하기 위해 radix 값을 항상 제공하는 것이 좋다

<br>

### T-2-1. 시도 횟수 입력 메세지 출력 테스트

- `toHaveBeen 관련 matcher`
  - toHaveBeen으로 시작하는 matcher들은 특히 mock함수의 호출과 관련된 검증에 사용된다
- `toHaveBeenCalled`
  - mock 함수가 호출되었는지 확인한다
- `toHaveBeenCalledTimes`
  - mock 함수가 특정 횟수만큼 호출되었는지 확인한다

    ``` javascript
    expect(mockFunc).toHaveBeenCalledTimes(3);  
    // mockFunc이 3번 호출되었는지 확인
    ```

- `toHaveBeenCalledWith`
  - mock 함수가 특정 인수로 호출되었는지 확인한다

    ``` javascript
    expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);  
    // mockFunc이 arg1, arg2로 호출되었는지 확인
    ```

- `toHaveBeenLastCalledWith`
  - mock 함수가 마지막으로 호출될 때 주어진 인수로 호출되었는지 확인한다

    ``` javascript
    expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);  
    // mockFunc이 마지막으로 arg1, arg2로 호출되었는지 확인
     ```

- `toHaveBeenNthCalledWith`
  - mock 함수가 n번째로 호출될 때 특정 인수로 호출되었는지 확인한다

    ``` javascript
    expect(mockFunc).toHaveBeenNthCalledWith(1, arg1, arg2);  
    // mockFunc이 첫 번째로 arg1, arg2로 호출되었는지 확인
    ```

- `toHaveReturned`
  - mock 함수가 값을 반환했는지 확인한다
- `toHaveReturnedWith`
  - mock 함수가 특정 값을 반환했는지 확인한다

    ``` javascript
    expect(mockFunc).toHaveReturnedWith(returnValue);  
    // mockFunc이 returnValue를 반환했는지 확인
    ```

- `toHaveBeenLastReturnedWith`
  - mock 함수가 마지막 호출에서 특정 값을 반환했는지 확인한다

    ``` javascript
    expect(mockFunc).toHaveBeenLastReturnedWith(returnValue);  
    // mockFunc의 마지막 호출에서 returnValue를 반환했는지 확인
    ```

- `toHaveNthReturnedWith`
  - mock 함수의 n번째 호출에서 특정 값을 반환했는지 확인한다

    ``` javascript
    expect(mockFunc).toHaveNthReturnedWith(1, returnValue);  
    // mockFunc의 첫 번째 호출에서 returnValue를 반환했는지 확인
    ```

<br>

### 2-2. 시도 횟수 입력 처리

- `trim`
  - 문자열의 앞 뒤 공백을 제거하기 위해 trim() 메서드를 사용한다

    ``` javascript
    const result = "   example   ".trim(); 
    ```

- `parseInt`
  - 문자열 내에 숫자와 문자가 함께 있을 때
  - 숫자가 아닌 문자를 만나면 해당 문자까지만 파싱하고, 그 이후의 문자는 무시한다

    ``` javascript
    const number = parseInt("123abc", 10); 
    // number : 123
    ```

  - 공백만 있는 문자열 일때
  - 결과값은 NaN이다

    ``` javascript
    const input = "   ";
    const result = parseInt(input.trim().replace(/\s+/g, ''), 10);
    // result : NaN 
    ```

- `replace`
  - 문자열의 일부를 다른 문자열로 대체하기 위해 사용한다
  - 두 가지 인자를 받는다
  - 검색 패턴 - 대체될 문자열 또는 정규 표현식
  - 대체 문자열 - 대체될 새로운 문자열 또는 함수

    ``` javascript
    const str = "Hello, World!";
    const newStr = str.replace("World", "Seojin");
    console.log(newStr);  
    // 출력: "Hello, Seojin!"

    ```

- `정규표현식`
  - 문자열의 특정 패턴을 찾기 위한 도구이다
  - /.../로 둘러싸여 있는 형식으로 표현된다
  - \d: 모든 숫자(0-9와 동일)
  - \s: 모든 공백 문자(스페이스, 탭, 줄바꿈 등)
  - \w: 모든 단어 문자(a-z, A-Z, 0-9, _와 동일)
  - g: 전역 검색, 문자열 내의 모든 일치 항목을 검색
  - i: 대소문자를 구분하지 않는 검색

    ``` javascript
    const str = "Hello 123 World 456!";
    const newStr = str.replace(/\d+/g, '');
    console.log(newStr);  
    // 출력: "Hello  World !"

    ```
  
- 결론
  - 문자열을 적절하게 정제한 후 숫자로 변환하는 것이 효율적이다