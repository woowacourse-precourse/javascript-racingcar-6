# Mission #02

Deadline: 2023년 11월 1일

[woowacourse-precourse/javascript-racingcar-6](https://github.com/woowacourse-precourse/javascript-racingcar-6)

## 🚀 기능 요구 사항

---

### 📌 기능 구현 목록

<aside>
💡 기능 단위로 commit 해보자!

</aside>

1. **사용자 입력 받기**
    1. 자동차 이름 : 5자 이하
    2. 쉼표 기준으로 구분 → 자동차 개수 구하기
    3. [예외처리] 잘못된 값 입력시 throw문을 통해 처리 → 애플리케이션 종료
        
        ```
        [ERROR] 숫자가 잘못된 형식입니다.
        ```
        
2. **시도할 횟수만큼 반복**
    1. 무작위값 생성 : 자동차 개수만큼
    2. 무작위값 ≥ 4 : 전진
    3. 실행 결과 출력
3. **최종 우승자 안내 문구 출력**
    1. 한 명 이상일 경우 쉼표로 구분

### 📌 입출력 요구 사항

1. 입력
    - 경주할 자동차 이름
    - 시도할 횟수
2. 출력
    - 각 차수별 실행 결과
    - 우승자 안내 문구

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

## 🚀 프로그래밍 요구 사항

---

✅ Node.js 18.17.1 버전에서 실행 가능해야 한다.

✅ 프로그램 실행의 시작점은 App.js의 play 메서드이다.

✅ package.json 변경할 수 없고, 외부 라이브러리를 사용하지 않는다.

✅ JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다.

<aside>
💡 [참조] Airbnb JavaScript Style Guide
[https://github.com/airbnb/javascript#table-of-contents](https://github.com/airbnb/javascript#table-of-contents)

</aside>

1. Types
    - Primitives
        
        `string` `boolean` `number` `null` `undefined` `symbol` `bigint`
        
    - Complex : 할당 시 shallow copy
        
        `object` `array` `function`
        
2. References
    - `const`  : 참조 재할당 X→ 버그 감소
    - `let` : 참조 재할당 O ← 블록 범위
    - `var` : 참조 재할당 O ← 함수 범위
3. Objects
    - 객체 생성 시 리터럴 구문 사용 : `new Object()` → `{}`
    - 동적 속성 이름 가진 객체 생성 시 계산된 속성명 사용
    - 객체 메서드 축약형 사용
        
        ```jsx
        const atom = {
        	value: 1,
        	addValue(value) {
        		return atom.value + value;
        	},
        };
        ```
        
    - 속성 값 축약형 사용 : 변수명 == 속성명일 경우
    - 축약형 속성 : 객체 선언 시작 부분에 그룹화
    - 유효하지 않은 식별자에만 속성을 따옴표로 묶음
    - `Object.prototype` 메서드 직접 호출 X → `.call` 사용
    - shallow copy 시 `Object.assign` 대신 `...` (스프레드) 사용
        
        ```jsx
        const copy = {...original, c: 3};
        const {a, ...noA} = copy;
        ```
        
4. Arrays
    - 배열 생성 시 리터럴 구문 사용 : `new Array()` → `[]`
    - 배열에 항목 추가시 직접할당 X, `Array#push` 사용
    - 배열 폭사 시 배열 스프레드 사용, 반복문X
        
        ```jsx
        const itemsCopy = [...items];
        ```
        
5. Destructuring 구조 분해
    - 객체의 여러 속성에 접근하고 사용할 때
        
        ```jsx
        const [first, second] = arr;
        // const first = arr[0]; const second = arr[1];
        ```
        
6. Strings
    - 문자열에 작은 따옴표 `''` 사용
    - 100자 초과할 경우 문자열 연결 `\` 사용 X
    - 사용자의 입력 동적으로 생성 시 템플릿 문자열 사용 `${name}`
    - 불필요한 문자열 사용 X
7. Functions
    - 함수 선언 대신 명명된 함수 표현식 사용
        
        ```jsx
        function foo() { ... }   //Bad
        const foo = function bar() { ... }   //Good
        ```
        
    - 즉시 실행 함수 표현식 : 괄호로 묶어주기
        
        ```jsx
        (function () {
          console.log('Welcome to the Internet. Please follow me.');
        }());
        ```
        
    - 함수명 명확하게, 매개변수는 3개 이하로
        
        → 3개 이상일 경우 `{}` 로 묶어주기
        
    - 매개변수 : arguments → 나머지 문법 `...` 사용
        
        ```jsx
        function concatenateAll() {   //Bad
          const args = Array.prototype.slice.call(arguments);
          return args.join('');
        }
        function concatenateAll(...args) {   //Good
          return args.join('');
        }
        ```
        
    - 함수 인자 변경하는 대신 기본 매개변수 구문 사용
        
        ```jsx
        function handleThings(opts = {}) { ... }
        ```
        
    - default parameter의 side effect 주의
    - 항상 default parameter는 매개변수 마지막에
    - 새로운 함수 생성 시 `new` 생성자 사용 X
    - 함수 정의 간격
        
        ```jsx
        const x = function a() {};
        ```
        
    - 매개변수 변경 X, 재할당 X
    - 여러 줄의 서명, 호출 → 별도의 줄에 배치, 마지막 항목에 쉼표 추가
        
        ```jsx
        function foo(
          bar,
          baz,
          quux,
        ) { ... }
        ```
        
8. Arrow Functions
    - 익명함수 사용해야하는 경우 (인라인 콜백 전달할 때) 화살표 함수 사용
        
        ```jsx
        [1, 2, 3].map(function (x) {   //Bad
          const y = x + 1;
          return x * y;
        });
        [1, 2, 3].map((x) => {   //Good
          const y = x + 1;
          return x * y;
        });
        ```
        
    - 표현식이 여러 줄에 걸쳐있는 경우, 괄호 `()` 로 묶기
    - 인자 주변에 `()` 항상 포함 : diff 변경 최소화
    - 비교 연산자와 혼동 X
9. Classes & Constructors
    - 항상 class 사용 : prototype 직접 조작 X
    - 상속을 위해 `extends` 사용
    - class에 지정되지 않은 경우 기본 생성자 존재
    - 중복 클래스 멤버 선언 → 마지막 것 선호
    - class method : `this`사용
    - static method : 외부 라이브러리가 특정 비정적 메서드 사용하는 경우
10. Modules
    - 표준이 아닌 모듈시스템보다 모듈 `import` / `export` 사용
    - wildcard import 사용 X
        
        ```jsx
        import * as AirbnbStyleGuide from './AirbnbStyleGuide';   //Bad
        import AirbnbStyleGuide from './AirbnbStyleGuide';   //Good
        ```
        
    - import에서 직접 export X
    - 한 곳의 경로에서의 import는 한 줄로 import
        
        ```jsx
        import foo, { named1, named2 } from 'foo';
        ```
        
    - 변경 가능한 바인딩 export X
    - 단일 export : `default` 사용
        
        ```jsx
        export default function foo() {}
        ```
        
    - 여러 줄의 import : 들여쓰기 필요
    - import 구문에서 Webpack loader syntax 허용 X
        
        → `webpack.config.js` 에서 loader syntax 사용
        
    - 확장명 포함 X :  `./foo.js` → `./foo`
11. Iterators and Generators
    - for-in, for-of 루프 대신 JavaScript의 고차 함수 사용
        - 배열 반복 : `map()` `filter()` `find()` `findIndex()` `reduce()` `some()` …
        - 객체 반복 : `Object.keys()` `Object.values()` `Object.entries()`
        - 코드
            
            ```jsx
            const numbers = [1, 2, 3, 4, 5];
            
            // bad
            let sum = 0;
            for (let num of numbers) {
              sum += num;
            }
            sum === 15;
            
            // good
            let sum = 0;
            numbers.forEach((num) => {
              sum += num;
            });
            sum === 15;
            
            // best (use the functional force)
            const sum = numbers.reduce((total, num) => total + num, 0);
            sum === 15;
            
            // bad
            const increasedByOne = [];
            for (let i = 0; i < numbers.length; i++) {
              increasedByOne.push(numbers[i] + 1);
            }
            
            // good
            const increasedByOne = [];
            numbers.forEach((num) => {
              increasedByOne.push(num + 1);
            });
            
            // best (keeping it functional)
            const increasedByOne = numbers.map((num) => num + 1);
            ```
            
    - generator 사용 X : 만약 사용하게 된다면 함수 서명 적절하게
        
        ```jsx
        const foo = function* () {
          // ...
        };
        ```
        
12. Properties
    - property 접근 시 점 표기법 사용 : a[p] → a.p
    - 변수로 접근 시 대괄호 표기법 사용 : a[prop]
    - 지수 계산 시 지수 연산자 `**` 사용
13. Variables
    - 변수 선언 시 항상 `const` `let` 사용 → 그렇지않으면 전역변수가 됨.
    - 할당당 하나의 const, let 선언 (쉼표 구분은 디버깅 어려움)
    - 모든 const 그룹화 후에 모든 let 그룹화
    - const, let : 블록 스코프O, 함수 스코프X
    - chain 변수 선언 X → 암묵적 전역변수 생성
        
        ```jsx
        let a = b = c = 1;   //Bad
        ```
        
    - unary 증가/감소 연산자 사용 X : `num++` → `num += 1`
    - `=` 연산자 전 후 라인 유지, break되면 괄호로 묶기
    - 사용하지 않은 변수 허용 X
14. Hoisting
    - `var` 선언은 hoisting 된다. (let, const는 X)
        
        ```jsx
        function example() {
          console.log(declaredButNotAssigned); // => undefined
          var declaredButNotAssigned = true;
        } //let, const였으면 referenceError
        ```
        
    - anonymous function : 변수명 호이스팅 O, 함수 할당은 호이스팅 X
        
        ```jsx
        function example() {
          console.log(anonymous); // => undefined
          anonymous(); // => TypeError anonymous is not a function
          var anonymous = function () {
            console.log('anonymous function expression');
          };
        }
        ```
        
    - named function : 변수명 호이스팅 O, 함수 이름, 본체 호이스팅X
        
        ```jsx
        function example() {
          console.log(named); // => undefined
          named(); // => TypeError named is not a function
          superPower(); // => ReferenceError superPower is not defined
          var named = function superPower() {
            console.log('Flying');
          };
        }
        ```
        
    - 함수 선언 : 이름, 본체 호이스팅O
        
        ```jsx
        function example() {
          superPower(); // => Flying
          function superPower() {
            console.log('Flying');
          }
        }
        ```
        
    - 변수, 클래스, 함수는 사용 전 정의 필수
15. Comparison Operators & Equality
    - `==` `!=` < `===` `!==`
    - 조건문 : `ToBoolean` 추상 메서드 → 강제 변환
        - true : Object, 숫자, string
        - false : Undefined, Null, +0, -0, NaN, “”
    - Boolean : 단축 표현 / 문자열, 숫자 : 명확한 비교 사용
    - switch-case문 : lexical선언 이용 시 `{}`
        
        ```jsx
        switch (foo) {
          case 1: {
            let x = 1;
            break;
          }
          case 2: {
            const y = 2;
            break;
          }
          case 3: {
            function f() {
              // ...
            }
            break;
          }
          case 4:
            bar();
            break;
          default: {
            class C {}
          }
        }
        ```
        
    - 삼항 연산자 중첩 X(한줄 표기식으로), 불필요한 삼항 연산자 사용 X
    - 연산자 섞을 때 괄호로 묶기 (표준 산술연산자 `+` `-` `++`  제외)
    - nullish coalescing operator(널리시 병합 연산자) `??`
        - 왼쪽 피연산자가 null, undefined일 때 오른쪽 피연산자 반환
        - 0일 때는 왼쪽 피연산자 반환
16. Blocks
    - 모든 멀티라인 블록에 `{}` 사용
        
        ```jsx
        if (test) return false;
        if (test) {
        	return false;
        }
        ```
        
    - else : if 블록의 닫는 중괄호와 같은 줄에 위치
    - if절에 return문 → else 블록 필요 X
17. Control Statements
    - 제어문(`if` `while` ) 길어지면 → 그룹화된 조건을 새로운 줄에 추가
    - 논리연산자는 줄의 시작 부분에
    - 제어문 대신 선택 연산자 사용 X
        
        ```jsx
        !isRunning && startRunning();   //Bad
        ```
        
18. Comments
    - 여러 줄 주석 : `/** ... */` 사용
        
        ```jsx
        /**
         * make() returns a new element
         * based on the passed-in tag name
         */
        ```
        
    - 한 줄 주석 : `//` 새로운 줄에 추가
    - 주석 연산자 이후 공백으로 시작
    - 주석 앞에 {`FIXME` : 파악해야하는 것 `TODO` : 구현해야하는 것 }추가
        
        ```jsx
        // FIXME: shouldn’t use a global here
        total = 0;
        // TODO: total should be configurable by an options param
        this.total = 0;
        ```
        
19. Whitespace
    - 소프트탭, indent : 2칸
    - 중괄호(제어문 여는 괄호, 함수 정의 괄호) 앞에 1칸 공백
    - 연산자 양옆에 공백 `x = y + 5`
    - 파일의 끝에 단일 개행 추가
    - 2개 이상의 메서드 체인 : 들여쓰기 사용
        
        ```jsx
        $('#items')
          .find('.selected')
            .highlight()
          .find('.open')
            .updateCount();
        ```
        
    - 블록 뒤와 다음 문장 앞에 빈 줄
    - 괄호, 대괄호 안에 공백 추가 X
    - 중괄호 안에 공백 추가 O
    - 코드 한 줄은 공백 포함 100자 이내
    - 쉼표 뒤에 공백O, 앞에는 X
    - 함수이름과 괄호 사이 공백 X
    - 식별자와 이어지는 즉시 호출 함수 표현식에는 공백 O
        
        ```jsx
        var foo = function() {};
        ```
        
20. Commas
    - 후행 쉼표
    - 추가적인 마지막 쉼표 : 추가, 삭제 용이
21. Semicolons
    - 자동 세미콜론 삽입 규칙 사용
    - 줄바꿈 잘못 해석 → 코드 중단
22. Type Casting & Coercion
    - 문장의 시작 부분에 타입 강제 수행
    - `toString()` `+''` `new String()` 대신에 `String()` 사용
    - 숫자 타입 캐스팅 : `Number()` / 문자열 파싱 : `parseInt()` 기수와 함께
        
        ```sql
        const val = Number(inputValue);
        const val = parseInt(inputValue, 10);   //10진수로
        ```
        
    - parseInt의 병목현상으로 인한 `Bitshift` 사용 시 주석 남기기
    - Boolean으로 캐스팅 : `new Boolean()` `Boolean()` 대신 `!!` 사용
        
        ```sql
        const age = 0;
        const hasAge = !!age;
        ```
        
23. Naming Conventions
    - object, function, instance : camelCase 사용 `thisIsMyObject`
    - constructor, class : PascalCase `User`
    - `_` `__` 사용 X
    - 변수명, 클래스명 : 영문 이외의 언어 사용 X
    - 클래스명, 메서드명 : 특수 문자 사용 X
    - 상수명 : SNAKE_CASE로 작성
    - `this` 에 대한 참조 저장 X → 화살표 함수나 function#bind 사용
    - 파일 이름 : export 이름과 일치
        
        ```jsx
        import CheckBox from './CheckBox'; // PascalCase export/import/filename
        import fortyTwo from './fortyTwo'; // camelCase export/import/filename
        import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
        ```
        
    - export
        - camelCase : function
        - PascalCase : constructor, class, singleton, function library, bare object
    - 이니셜을 대문자로 `SMSContainer`
    - 상수 : export, 재할당X 인 경우 대문자로
24. Accessors
    - 속성을 위한 접근자 함수 필요 X
    - `getters` `setters` 사용 X → 접근자 함수 만들기
    - 속성/메서드가 bool인 경우 `isVal()` `hasVal()` 사용

✅ 프로그램 종료 시 proess.exit()를 호출하지 않는다.

✅ 프로그램 구현이 완료되면 ApplicationTest의 모든 테스트가 성공해야 한다.

✅ 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

✅ indent depth를 3이 넘지 않도록 구현한다.

- 함수 분리를 잘 활용하자 !

✅ Jest를 이용하여 정리하는 기능 목록이 정상 동작함을 테스트 코드로 확인한다

- 테스트 도구 사용법 : `__tests__/StringTest.js` 참고

✅ `@woowacourse/mission-utils` 에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.

- Random값 추출 : `Random.pickNumberInRange()` 활용
    
    ```jsx
    //0에서 9까지의 정수 중 한 개의 정수 반환
    MissionUtils.Random.pickNumberInRange(0, 9);
    ```
    
- 사용자의 값 입력 받기 : `Console.readLineAsync`
- 출력하기 : `Console.print`

## 🚀 과제 진행 요구 사항

---

✅ Commit message convention 참고해 커밋 메시지를 작성한다.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- `<type>`
    
    
    | 분류 | 내용 |
    | --- | --- |
    | feat | 기능 및 레이아웃 추가 |
    | fix | 버그 해결 |
    | refactor | 코드수정 및 삭제 등의 리팩토링 |
    | style | 스타일 추가 및 수정 |
    | chore | 빌드 및 배포 작업 |
- `<scope>` : commit change의 특정 장소
    
    ex> $location, $browser, $compile, $rootScope, ngHref, 등
    
- `<subject>` : text
    - 첫 글자 대문자 X, 끝에 dot(.) 사용 X
    - 현재 진행 상황 : `change`, `changed`, `changes`
