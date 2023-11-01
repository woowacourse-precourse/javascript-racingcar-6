# 자동차 경주 - 구현 기능 목록

## 🔎 1주 차 공통 피드백 적용 
<details>
<summary>피드백 적용기</summary>

### 커밋 메세지를 의미있게 작성한다.
- 커밋 메세지 컨벤션을 적용해 feat, refactor와 같은 prefix들을 이용해서 어떤 역할을 했는지 바로 알 수 있게 하였다.
- feat(변경된 파일명) 형식을 통해 어떤 파일이 수정되었는지도 알려주었다. 1주차에 어떤 파일이 수정되었는지 확인이 어렵다고 느껴서 추가하게 되었다.

### git을 통해 관리할 자원에 대해서도 고려한다.
- node_modules, package.json, 등을 .gitignore에 추가해 git에 추가되지 않도록 하였다.
- git add .을 사용하지 않고 어떤 부분을 커밋 할 것인지 확인 후 스테이지에 올리는 방식으로 커밋을 진행했다.

### Pull Request를 보내기 전 브랜치를 확인한다.
- 기능 구현을 위해 새로 만든 yui880 브랜치에서 작업하고 푸시하였다.

### 이름을 통해 의도를 드러낸다.
- 1주차 코드리뷰에서 이름에 대한 조언을 많이 받아서 변수,메서드 명을 짓는데 많은 시간을 들였다.
- 값을 가져온다면 get, 데이터를 가지고 새로운 값을 만든다면 make, 검증할 때는 check 동사를 사용하는 등 이름만 보고 무슨 역할을 하는지 바로 알아볼 수 있게 하였다.
  ```js
  this.#getCarNamesInput();
  this.#makeSplitCarNames(carNames);
  checkHasEmpty(userInput);
  ```
- 인스턴스명도 클래스와 연관있는 이름을 지어서 어떤 역할을 하는지 드러내주었다.
  ```js
  this.#racingCars = new RacingCars(carNameList);
  ```
- 코드 작성시 많이 사용되고, 읽기 편한 단어를 사용해서 이름을 짓기 위해 노력하였다.
  ```js
  const numsOfAttempts = 0 
  const attemptCount = 0 // number Of 보다 Count가 더 친숙
  ```
- 호출하면서 반복되는 단어들은 삭제하였다.
  ```js
  this.racingCars.#getRacingCarsMovingLog() // 호출시 racingCars라는 단어가 중복됨
  this.racingCars.#getMovingLog() // 수정 
  ```

### 축약하지 않는다.
- 이름을 통해 어떤일을 하는지 정확하게 드러나도록 작성하였다.
- 중요한 단어들은 축약하거나 삭제하지 않고 코드 작성시 잘 사용되는 length -> len 같은 경우에만 축약해서 사용하였다.
  ```
  static checkIsLongerThanMaxLen(userInput){...}
  ```

### 공백도 코딩 컨벤션이다 / 공백 라인을 의미있게 사용한다
- return이 있는 메서드의 경우 return 윗줄에 공백을 추가해서 return 값이 무엇인지 확실히 보여주었다.
  - 두 줄인 메서드의 경우에는 공백을 추가하지 않았다. 코드가 한눈에 들어오기 때문에 공백 없이도 가독성이 좋다고 생각했기 때문이다.
  ```js
   async #getCarNamesInput() {
    const carNames = await Console.readLineAsync(MESSAGE.enterCarNames);
    const splitCarNames = this.#makeSplitCarNames(carNames);
    this.#validateCarNamesInput(splitCarNames);

    return splitCarNames;
  }
  ```
  ```js
  async startGame() {
    const carNameList = await this.#getCarNamesInput();
    const attemptCount = await this.#getAttemptInput();

    this.#racingCars = new RacingCars(carNameList);
    this.#repeatMovement(attemptCount);

    Console.print(this.#makeFinalWinnerString());
  }
  ```
- test 코드에서 given, when, then 사이에도 공백을 넣어서 역할을 정확히 구분해주었다.
  ```js
  test.each([
    { names: ['pobi'], random: [3], output: 'pobi : ' },
    { names: ['pobi', 'yuna', 'lisa'], random: [2, 4, 6], output: 'pobi : \nyuna : -\nlisa : -' },
  ])('각 차수별 이동 결과를 제대로 반환하는지 테스트', ({ names, random, output }) => {
    // given
    mockRandoms(random);

    // when
    const racingCars = new RacingCars(names);
    const result = racingCars.getMovingLog();

    // then
    expect(result).toBe(output);
  });
  ```

### space와 tab을 혼용하지 않는다.
- space로 통일해서 사용하였다.
- prettier를 통해 space로 작성될 수 있도록 규칙을 작성해주었다.
  ```
  // .prettierrc
  {
  "useTabs": false,
  "tabWidth": 2,
  }
  ```

### 의미없는 주석을 달지 않는다.
- 좋은 코드란 메서드명, 클래스명, 변수명을 통해 의도가 드러나는 코드라고 생각한다. 그래서 네이밍을 하는데 많은 노력을 들였고, 주석은 최대한 작성하지 않았다.
- 이번주 자동차 경주 게임 프로그램에는 test에 작성된 given-when-then 주석을 제외하고 코드를 설명하는 주석을 작성하지 않았다

### linter와 Code Formatter의 기능을 활용한다.
- eslint를 설치해서 사용하였다. airbnb 자바스크립트 스타일 가이드를 기준으로 사용하였다. `npm init @eslint/config`
  ```
  // .eslintrc.cjs
  
  module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-depth': ['error', 2],
  },
  };
  ```
- prettier를 설치해서 사용하였다. `npm i prettier eslint-config-prettier`
  ```
  // prettierrc
  
  {
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "auto"
  }
  ```

### EOL(End Of Line)
- prettier에서 EOL를 auto로 설정해주었다.
  ```
  {'endOfLine': 'auto'}
  ```

### 불필요한 console.log를 남기지 않는다.
- 디버깅 이후에 바로 삭제해서 console.log가 남지 않도록 신경썼다.
- 출력에 사용되는 MissionUtils.Console은 현재 RacingCarGame에만 import 되어있다.

### JavaScript에서 제공하는 API를 적극 활용한다.
- Array.from, join, repeat, includes, 템플릿 리터럴과 같은 자바스크립트 기능들을 적극 사용하였다. 덕분에 깔끔하고 간단하게 원하는 기능을 구현할 수 있었다.
  ```js
  if (userInput.includes('')) {
      throw new ValidationError(ERROR.hasEmpty);
    }
  ```
</details>

---
## 📢 추가된 요구 사항 

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
  - eslint에서 `max-depth`를 2로 설정하여 요구 사항을 지키기 위해 노력하였다.


- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
  - 테스트 도구 사용법이 익숙하지 않다면 __tests__/StringTest.js를 참고하여 학습한 후 테스트를 구현한다.
  - 각 클래스마다 테스트를 추가해서 각 메서드들이 정상 동작하는지 확인하는 테스트를 구현하였다.


- 기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 `docs/README.md`에 정리한 기능 목록 단위로 추가한다.
  - 커밋 메시지 컨벤션 가이드를 참고해 커밋 메시지를 작성한다.

---
## 🚀 목표 
### 함수를 분리하고, 함수별로 테스트 작성하기 

- 함수 분리하기 
  - max-depth가 3을 넘지 않게하라는 요구사항에서 기능이 많아지면 메서드들 나눠서 depth가 작아지게 함을 유도했다고 생각했다.
  - 그래서 (다른 메서드들을 호출해서 게임을 진행하는 메서드를 제외하고는) 모든 메서드가 하나의 일만 하도록 분리해서 작성하였다.
  - 기능 목록을 미리 작성하고 해당 기능에 해당하는 함수들을 하나하나 작성해가며 전체 코드를 완성해나갔다.
    - 기능 목록이 두루뭉실 해서 여러 기능이 필요하다면 요구사항을 더 자세히 나누는 작업을 수행하였다.


- 함수별로 테스트 작성하기
  - 기능 목록에 작성한 기능들이 모두 제대로 작동하는지 확인하기 위해 테스트를 작성하였다.
    - 모든 메서드들에 대한 테스트를 작성하였다.
    - private 메서드들에 대해서는 테스트를 작성하지 않았다. 
      - 외부에 노출되면 안된다고 생각하였고, private 메서드들은 다른 메서드를 통해서 충분히 테스트 되어야 한다고 생각하였다. 
      - 그래서 private 으로 구현된 기능들은 다른 메서드들을 통해 검증되도록 추가 테스트를 작성하였다.
  - 함수별로 테스트를 작성하는 과정이 단위 테스트와 같다고 생각하여 단위테스트에 대한 학습을 진행하였다.


---
## 📌 주제

> 자동차 경주 게임🚘 : 자동차를 입력하면 랜덤으로 나오는 숫자를 기반으로 자동차를 움직여서 경주하는 게임

---
## 📍 프로그램 흐름

1. 경주할 자동차의 이름을 입력받는다.(자동차의 이름은 쉼표로 구분되어 있음)
2. 시도할 횟수를 입력받는다.(자동차가 몇번의 이동 시도를 할지)
3. 각 자동차에 해당하는 랜덤 숫자가 생성된다.(매 시도마다 생성됨)
4. 해당 랜덤 숫자가 4 이상이면 해당 자동차는 전진한다.
5. 해당 랜덤 숫자가 4 미만이면 해당 자동차는 그대로 있는다.
6. 이전에 이동한 기록에 현재 이동한 기록을 추가하여 출력한다.
7. 입력받은 시도 횟수만큼 3-6을 반복한다.
8. 최종 경주 결과를 가지고 누가 가장 많이 이동했는지(우승인지) 확인한다.
9. 최종 우승자를 출력한다.(우승자가 여러명이면 쉼표로 구분해서 출력)
10. 게임을 종료한다.

---
## 📚 기능 목록

### Car.js
- [x] 랜덤 숫자가 4 이상이면 자동차가 전진하는 기능
  - [x] 각 자동차에 해당하는 랜덤 숫자를 생성하는 기능
  - [x] 자동차의 이동 기록을 만들어내는 기능
- [x] 자동차끼리 이동 횟수가 누가 더 큰지 비교하는 기능
- [x] 자동차끼리 이동 횟수가 같은지 비교하는 기능

### RacingCars.js
- [x] 각 자동차들이 이동하도록 지시하고 전체 이동 결과를 가져오는 기능
- [x] 최종 경주 결과를 두고 누가 우승자인지(가장 많이 이동했는지) 확인하는 기능
  - [x] 가장 큰 이동 횟수를 구하는 기능 
  - [x] (가장 큰) 이동 횟수와 같은 이동 횟수를 가진 자동차를 구하는 기능
  - [x] 최종 우승자 배열을 문자열로 변환하는 기능  

### RacingCarGames.js
- 게임을 진행하는 기능
  - [x] 경주할 자동차의 이름을 입력받는 기능 
    - [x] 입력 받은 자동차의 이름을 분리해서 배열에 저장하는 기능 
    - [x] 자동차 이름 입력값을 검증하는 기능
  - [x] 시도할 횟수를 입력받는 기능
    - [x] 시도 횟수 입력값을 검증하는 기능
  - [x] 자동차가 이동한 결과를 출력하는 기능
  - [x] 최종 우승자를 출력하는 기능

---
## 📒 예외 목록

### Validator.js
- 자동차의 이름을 입력받을 때
  - [x] 공백이 입력된 경우(혹은 아무것도 입력되지 않은 경우) 
  - [x] 중복된 이름이 있을 경우
  - [x] 이름이 5자 초과일 경우
- 시도할 횟수를 입력받을 때 
  - [x] 입력값이 숫자가 아닐 경우(공백이 입력된 경우도 처리)
  - [x] 입력값이 정수가 아닐 경우
  - [x] 입력값이 0일 경우
  - [x] 입력값이 음수인 경우
 
---
## 💡 테스트 목록

> [테스트한 메서드 이름 : 테스트 이름] 으로 작성 

- private 메서드는 테스트 작성하지 않음


- **CarTest**
  - `moveForward` : 이동 결과에 자동차 이름이 잘 출력되는지 테스트
  - `moveForward` : 자동차의 랜덤 숫자에 따라 이동한 결과가 올바른지 테스트
  - `compareWith` : 다른 자동차와 이동 횟수를 잘 비교하는지 테스트
  - `compareIsSame` : 다른 자동차와 이동 횟수가 같은지 비교하는 기능 테스트
  - `getName` : 자동차의 이름을 잘 반환하는지 테스트


- **RacingCarsTest**
  - `getMovingLog` : 각 차수별 이동 결과를 제대로 반환하는지 테스트
  - `getWinners` : 이동 횟수를 비교해서 우승자를 가려내는 기능 테스트 


- **RacingCarGameTest**
  - `startGame` : 게임이 정상 작동 하는지 테스트 
  - `startGame` : 자동차 입력값에 대한 예외처리 테스트
  - `startGame` : 시도 횟수 입력값에 대한 예외처리 테스트 


- **ValidatorTest**
  - `ValidationError` : 에러 발생시 메세지는 [ERROR] 접두사를 가져야 한다.
  - `checkHasEmpty` : 자동차의 이름 중 공백이 존재하면 오류가 발생되어야 한다.
  - `checkHasDuplicate` : 자동차의 이름 중 중복된 이름이 존재하면 오류가 발생되어야 한다.
  - `checkIsLongerThanMaxLen` : 자동차의 이름이 최대 길이보다 길면 오류가 발생해야 한다.
  - `checkIsNotNumber` : 입력값이 숫자가 아니면 오류가 발생해야 한다.
  - `checkIsNotMoving` : 입력값이 0이면 오류가 발생해야 한다.


---
## 🗂 파일 구조
```
┗ src
  ┣ constants
  ┃  ┗ Constant.js         // 프로그래밍 중 사용되는 상수 정리
  ┣ utils
  ┃  ┣ ValidationError.js  // [ERROR] 키워드를 위한 커스텀 에러 클래스
  ┃  ┗ Validator.js        // 해당 값이 올바른지 검증하는 메서드들로 구성된 유틸리티 클래스
  ┣ App.js                 // 게임 시작 역할 
  ┣ index.js            
  ┣ RacingCarGame.js       // 자동차 경주 게임의 실행을 책임지는 클래스
  ┣ RacingCars.js          // 자동차 경주 게임에 참여하는 자동차들 전체를 관리하는 클래스
  ┗ Car.js                 // 각각의 자동차에 대한 클래스
```