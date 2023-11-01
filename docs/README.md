# 우테코 프리코스 2주차 - FE

## 미션 - 자동차 경주 게임

### 구현할 기능 순서

1. 유저는 n대의 자동차 이름을 입력한다. 구분자는 쉼표 (,) 이다.

   - 안내 문구는 `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 의 형태로 출력한다.

2. 유저는 자동차의 이동 횟수를 입력한다.

   - 안내 문구는 `시도할 횟수는 몇 회인가요?` 의 형태로 출력한다.

3. 입력 받은 이동 횟수만큼 반복하여 각 차수별 실행 결과를 출력한다.

   - 모든 자동차에 대한 0~9 범위의 랜덤 정수를 생성한다. 각 자동차는 랜덤 정수가 4 이상일 경우에만 전진한다.

   - 각 차수별 실행결과 출력은 `${자동차 이름} : ${누적 전진 횟수('-')} ` 의 형태이다.

4. 가장 멀리 전진한 자동차(들)을 최종 우승자로 출력한다.

   - 단독 우승자라면 `최종 우승자 : ${자동차 이름}` 의 형태로 출력한다.
   - 공동 우승자라면 각 우승자를 쉼표로 구분하여 `최종 우승자 : ${공동 우승자, ...}` 의 형태로 출력한다.

5. 프로그램을 종료한다. 프로그램 동작 중 사용자가 잘못된 값을 입력한 경우 `[ERROR]` 문이 발생하며, 프로그램을 종료시킨다.

### 예외처리

- [x] 입력 받은 자동차가 2대 이상인지
- [x] 입력 받은 자동차 이름 길이가 5자 이하인지, 공백은 없는지, ','로 끝난 경우
- [x] 입력 받은 자동차의 이름이 중복되지 않았는지
- [x] 입력 받은 시도할 횟수가 숫자가 아니거나 1 ~ 9 범위의 유효한 숫자가 아닌 경우

### jest 파일 작성해보기

- InputTest.js

  - 자동차 입력값 테스트
    - [x] 쉼표(,)후 빈 문자열 예외 처리
    - [x] 중복된 자동차 이름 예외 처리
  - 시도 횟수 입력값 테스트
    - [x] 숫자가 아닌 것 확인
    - [x] 1 ~ 9 범위의 유효한 숫자 확인

- FunctionTest.js
  - 기능 구현 함수 테스트
    - [x] 최종 우승자 결과 확인
    - [x] 랜덤값에 따른 올바른 distance 계산 확인

### 폴더 구조

```
 root
 |---src
     |--- App.js
     |--- index.js
     |--- game
           |--- race.js
     |--- constants
           |--- messeges.js
     |--- models
           |--- Car.js
     |___ validators
           |--- validator.js
```

### eslint 사용해보기

```
module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'operator-linebreak': ['error', 'before'],
    'max-depth': ['error', 2],
  },
  'import/extensions': ['error', 'ignorePackages', {
    js: 'never',
  }],
  },
};
```

### prettier 사용해보기

```
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  proseWrap: 'never',
  endOfLine: 'auto',
};
```

### Todo

- [x] 자동차 이름 길이, 쉼표 기준 등 input test 파일 작성
- [x] App파일 indent 3 이상 넘지 않도록 함수화
- [x] 상수들 변수화 하기
- [x] 폴더 구조 나눠보기
- [x] eslint, prettier 세팅 및 적용해보기
