# 2주차 자동차 경주

## ❗ 1주 차 공통 피드백

<details>
  <summary>
    자세히보기
  </summary>

## 1. 요구사항을 정확히 준수한다

과제 제출 전에 기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항의 항목을 모두 잘 지켰는지 다시 한 번 점검한다.

## 2. 커밋 메시지를 의미 있게 작성한다

커밋 메시지에 해당 커밋에서 작업한 내용에 대한 이해가 가능하도록 작성한다.

## 3. git을 통해 관리할 자원에 대해서도 고려한다

node modules 는 package.json 파일이 있으면 설치할 수 있고 버전 관리를 직접 하지 않으므로 git으로 관리하지 않아도 된다.
Intellij의 .idea 폴더, VS Code의 .vscode 폴더 또한 개발 도구가 자동으로 생성하는 폴더이기 때문에 굳이 git으로 관리하지 않아도 된다.
앞으로 git에 코드를 추가할 때는 git을 통해 관리할 필요가 있는지를 고려해볼 것을 추천한다.

## 4. Pull Request를 보내기 전 브랜치를 확인한다

기능 구현 작업을 fork된 Repository의 main branch가 아닌, 기능 구현을 위해 새로 만든 브랜치에서 작업한 후 PR을 보낸다.

## 5. PR을 한 번 작성했다면 닫지 말고 추가 커밋을 한다

PR을 이미 한 번 보냈다면, 새로운 PR을 생성할 필요가 없다. 수정이 필요하다면 추가 커밋을 하면 자동으로 반영된다. 단, 미션 제출 기간 이후에는 추가 커밋을 하지 않는다.

## 6. 이름을 통해 의도를 드러낸다

나 자신, 다른 개발자와의 소통을 위해 가장 중요한 활동 중의 하나가 좋은 이름 짓기이다. 변수 이름, 함수(메서드) 이름, 클래스 이름을 짓는데 시간을 투자하라. 이름을 통해 변수의 역할, 함수의 역할, 클래스의 역할에 대한 의도를 드러내기 위해 노력하라. 연속된 숫자를 덧붙이거나(a1, a2, ..., aN), 불용어(Info, Data, a, an, the)를 추가하는 방식은 적절하지 못하다.

## 7. 축약하지 않는다

의도를 드러낼 수 있다면 이름이 길어져도 괜찮다.

> 누구나 실은 클래스, 메서드, 또는 변수의 이름을 줄이려는 유혹에 곧잘 빠지곤 한다. 그런 유혹을 뿌리쳐라. 축약은 혼란을 야기하며, 더 큰 문제를 숨기는 경향이 있다. 클래스와 메서드 이름을 한 두 단어로 유지하려고 노력하고 문맥을 중복하는 이름을 자제하자. 클래스 이름이 Order라면 shipOrder라고 메서드 이름을 지을 필요가 없다. 짧게 ship()이라고 하면 클라이언트에서는 order.ship()라고 호출하며, 간결한 호출의 표현이 된다.
> 객체 지향 생활 체조 원칙 5: 줄여쓰지 않는다 (축약 금지)

## 8. 공백도 코딩 컨벤션이다

if, for, while문 사이의 공백도 코딩 컨벤션이다.

## 9. 공백 라인을 의미 있게 사용한다

공백 라인을 의미 있게 사용하는 것이 좋아 보이며, 문맥을 분리하는 부분에 사용하는 것이 좋다. 과도한 공백은 다른 개발자에게 의문을 줄 수 있다.

## 10. space와 tab을 혼용하지 않는다

들여쓰기에 space와 tab을 혼용하지 않는다. 둘 중에 하나만 사용한다. 확신이 서지 않으면 pull request를 보낸 후 들여쓰기가 잘 되어 있는지 확인하는 습관을 들인다.

## 11. 의미 없는 주석을 달지 않는다

변수 이름, 함수(메서드) 이름을 통해 어떤 의도인지가 드러난다면 굳이 주석을 달지 않는다. 모든 변수와 함수에 주석을 달기보다 가능하면 이름을 통해 의도를 드러내고, 의도를 드러내기 힘든 경우 주석을 다는 연습을 한다.

## 12. linter와 Code Formatter의 기능을 활용한다

가능하면 eslint와 prettier를 이용해 더욱 생산적으로 코드를 작성하자.
린트(lint)는 소스 코드에 문제가 있는지 탐색하는 작업을 의미하며, 린터(linter)는 이 작업을 도와주는 소프트웨어를 말한다. 자바스크립트와 같은 인터프리터 언어의 경우, 런타임 에러가 발생할 확률이 높기 때문에, 이 린트 작업을 통해 사전에 에러를 최대한 잡아준다면 훨씬 생산성 높은 개발을 할 수 있다. lint 중 eslint는 자바스크립트 진영의 오픈소스로 확장되고 있는 정적 분석 도구이다.
prettier는 일종의 Code Formatter이다. Code Formatter란 개발자가 작성한 코드가 정해진 코딩 스타일을 따르도록 변환해주는 도구이다. 이 두 가지 도구를 이용하면 코드를 짜는데 발생할 수 있는 오류를 미리 예방하고 쉽게 정돈할 수 있다.

## 13. EOL(End Of Line)

최종 제출하는 코드에서 EOL을 확인한다. 환경에 따라 의도한 바와 다르게 개행 문자 처리가 되지 않도록 EOL 설정을 확인한다.

## 14. 불필요한 console.log를 남기지 않는다

디버깅을 위해 사용한 console.log가 최종 제출하는 코드에 의미 없이 남아있지 않도록 주의한다.

## 15. JavaScript에서 제공하는 API를 적극 활용한다

함수(메서드)를 직접 구현하기 전에 JavaScript API에서 제공하는 기능인지 검색을 먼저 해본다.  
JavaScript API에서 제공하지 않을 경우에 직접 구현한다.
예를 들어 우승자를 출력할 때 우승자가 2명 이상이면 쉼표(,) 기준으로 출력을 위한 문자열은 다음과 같이 구현할 수 있다.

```javascript
const members = ['east', 'west', 'south'];
members.map((member) => member).join(','); // "east,west,south"
```

</details>

# 🚀 기능 요구 사항

## 1. 사용자는 자동차의 이름을 입력 할 수 있다. (자동차 이름은 쉼표를 기준으로 구분한다.)

- **예외상황**

  - 자동차 이름 목록안에 중복(대,소문자 비교까지)되는 이름이 있을 경우 Error 를 throw 한다. ☑️
  - 자동차 이름이 존재하지 않을 때 Error 를 throw 한다. ☑️
  - 자동차 이름 중에 5자를 넘어가는 자동차가 있다면 Error 를 throw 한다. ☑️
  - 쉼표가 연속적으로 입력 된 경우 Error 를 throw 한다. ☑️
  - 쉼표가 맨 앞이나 맨 뒤에 입력된경우 Error 를 throw 한다. ☑️
  - 이름안에 공백이 포함되는 경우엔 Error를 throw 한다. ☑️
  - 이름에 숫자, 영문, 한글이 아닌 다른 문자가 들어 갈 경우 Error를 throw 한다. ☑️
  - 자동차는 최소 2대 이상이어야하며, 1대만 입력했을시 Error를 throw 한다. ☑️

## 2. 이동 할 횟수를 입력 받는다.

- **예외상황**

  - 이동 횟수가 숫자가 아닐경우 Error를 throw 한다. ☑️
  - 이동 횟수가 0일 경우 Error를 throw 한다. ☑️
  - 이동 횟수에 공백이 들어간 경우 Error를 throw 한다. ☑️
  - 이동 횟수는 무조건 양의 정수여야하며, 음수였을때 Error를 throw 한다. ☑️

## 3. 게임 상황을 출력한다. ☑️

- 입력 받은 자동차들은 전진 혹은 멈출 수 있다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
  - 출력 예시 (pobi : -)
  - 전진은 "-"로 표현한다.

## 4. 우승자를 출력한다. ☑️

- 우승자를 출력한다.

  - 우승자는 가장 많이 전진한 한개 이상의 자동차이다.
  - 공동 우승자가 발생할 경우 쉼표를 이용해서 구분한다. 예시 (pobi, jun)

  ***

  # - 🎯 프로그래밍 요구 사항

- <details>
    <summary> .nvmrc 에 노드 버전 기재</summary> 
    
    `v.18.17.1`
  </details>

- <details>
    <summary>eslint 룰 적용</summary>

  `npm install --save-dev eslint eslint-plugin-jsdoc@latest eslint-plugin-jest@latest eslint-plugin-prettier@latest eslint-config-prettier @babel/eslint-parser` 로 설치하고 .eslintrc.cjs 파일을 만들어서 룰 적용
  </details>

- <details>
    <summary> indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다</summary>
    
    eslint 에 `max-depth': ['error', 2]`  룰 추가
  </details>

- <details>
  <summary>JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다</summary>

  `npm install --save-dev eslint-config-airbnb` 설치 후 .eslintrc.cjs 에서 `extends : ['airbnb']` 추가

</details>

---

# - ✏️ 과제 진행 요구 사항

## 1. 기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.

- README.md 작성

# - 파일 구조

```
📦src
 ┣ 📂ViewController  입, 출력을 담당하는 객체 폴더
 ┃ ┣ 📜InputView.js 입력 담당 객체
 ┃ ┗ 📜outputView.js 출력 담당 객체
 ┣ 📂constants  상수를 담당하는 폴더
 ┃ ┣ 📜errorMessages.js 에러 메세지 상수 관리 객체
 ┃ ┗ 📜gameMessages.js 게임 메세지 상수 관리 객체
 ┣ 📂error  커스텀 에러 클래스를 담당하는 폴더
 ┃ ┗ 📜AppError.js
 ┣ 📂models  어플리케이션 도메인들을 담고 있는 폴더
 ┃ ┣ 📜AllNamesOfCars.js 입력 받은 모든 자동차 이름들을 담는 클래스
 ┃ ┣ 📜Car.js 각각 독립된 자동차를 담는 클래스
 ┃ ┣ 📜CountOfAttemp.js 시도 횟수를 담는 클래스
 ┃ ┗ 📜RacingGame.js 게임 진행 상황을 담는 클래스
 ┣ 📂utils  유틸 함수 폴더
 ┃ ┗ 📜generatorRandomNumber.js  랜덤한 숫자를 생성하는 함수
 ┣ 📜App.js 메인 실행 파일
 ┗ 📜index.js  진입 파일
```

```
📦__tests__
 ┣ 📂AllNamesOfCars
 ┃ ┗ 📜AllNamesOfCarsTest.js 입력 받은 모든 자동차 이름들을 담는 클래스에 대한 테스트 파일
 ┣ 📂Car
 ┃ ┗ 📜CarTest.js 각각 독립된 자동차를 담는 클래스에 대한 테스트 파일
 ┣ 📂CountOfAttempt
 ┃ ┗ 📜CountOfAttempTest.js 시도 횟수를 담는 클래스에 대한 테스트 파일
 ┣ 📜AdditionalTest.js 추가적인 테스트 케이스들을 담은 파일
 ┣ 📜ApplicationTest.js
 ┗ 📜StringTest.js
```
