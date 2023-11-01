# 고려 사항들

## 1. 변경 예상

> 상수는 나중에 파일 따로 배정할 예정
> 이름 길이의 최소 최대 언제든 간편하게 변경가능하도록 또한 구분자도 변경 언제든지 가능하도록 설계

```js
export const isNameLength = (input) => {
  const NAME_LENGTH_MIN = 2;
  const NAME_LENGTH_MAX = 5;
  const DELIMITER = ',';
  return input.split(DELIMITER).every((name) => {
    return name.length >= NAME_LENGTH_MIN && name.length <= NAME_LENGTH_MAX;
  });
};
```

## 2. 에러 발생

### 문제

async/await 사용할 때 주의할 점은 하위 함수에서 async/await를 사용하는 함수가 포함되어있다면
해당 함수를 호출하는 최상단 함수부터 계속 async/await 키워드를 써줘야한다 중간에 단 한번이라도 빼먹으면 테스트 코드가 동작하지 않는다. 필자는 app.js에 await를 빼먹어서 계속 테스트에서 에러가 발생했다. 하지만 node는 정상 동작해서 알아차리기 쉽지 않다.
async/await를 가진 함수를 추상화할 때는 정말 주의 해야한다 추상화를 많이 할 수록 함수가 하나의 기능을 하는데는 좋겠지만 자칫 키워드를 하나라도 빼먹는 실수를 하면 에러를 찾는데 많은 시간이 소모된다.

```js
 async play() {
    this.#controller.startGame();
  }
```

```test
/Users/wonmac/woowa/javascript-racingcar-6/src/utils/validator/index.js:14
    if (!(0, _index.isNameLength)(carNames)) throw new Error('[ERROR] 이름의 길이가 유효하지 않습니다.');
```

### 해결

eslint 규칙중에 [require-await](https://eslint.org/docs/latest/rules/require-await) 규칙을 추가했다.
이 규칙을 추가하면 async/await 두개 모두 키워드를 쓰지 않는 실수를 제외하고 하나의 키워드만 있을 때 에러표시를 해준다.

> 에러 표시

```js
/*eslint require-await: "error"*/
async function foo() {
  doSomething();
}

bar(async () => {
  doSomething();
});
```

> 에러 표시 x

```js
/*eslint require-await: "error"*/
async function foo() {
  await doSomething();
}

bar(async () => {
  await doSomething();
});
```

## 3. model을 잘 작성한 걸까?

> 1차로 작성한 model은 아래와 같다. 과연 레이싱카말고 제트스키라면? 모터싸이클이라면? 변경해야할 부분이 꽤 생겨서 2차로 작성할 때는 다시 한번 고려해 봐야 한다.

```js
import { SYSTEM } from '../constants/System.js';
import FinalWinnerSelector from './FinalWinnerSelector.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';

class RacingCarModel {
  #carData;

  static canMove() {
    const randomNumber = RandomNumberGenerator.run();
    return randomNumber >= SYSTEM.moveStartPoint;
  }

  saveCarNames(carNames) {
    this.#carData = new Map();
    carNames.split(SYSTEM.delimiter).forEach((carName) => {
      this.#carData.set(carName, '');
    });
  }

  racing() {
    this.#carData.forEach((progress, car) => {
      if (RacingCarModel.canMove()) {
        this.#carData.set(car, `${progress}${SYSTEM.move}`);
      }
    });
  }

  getFinalWinner() {
    const finalWinner = FinalWinnerSelector.evaluate(this.#carData);
    return finalWinner;
  }

  getCarData() {
    return this.#carData;
  }
}

export default RacingCarModel;
```

## 4. controller를 의존성 없이?

> 현재 컨트롤러는 아래와 같다
> before

```js
class RacingCarController {
  #model;

  constructor() {
    this.#model = new RacingCarModel();
  }

  ...
}
```

> 지금 곰곰이 생각해 보니 model을 생성자에서 직접 생성하는 것보다 생성자 인수로 전달해주는 것이 더 좋다고 생각했습니다. 왜냐하면 테스트 또는 확장성 측면에서 더 유리하기 때문입니다.  
> after

```js
class RacingCarController {
  constructor(model) {
    this.#model = model;
  }
  // ...
}
```

- Reference
- [의존관계 주입 쉽게 이해하기](https://tecoble.techcourse.co.kr/post/2021-04-27-dependency-injection/)

## 5. 불필요한 의존성 제거

처음에는 `SYSTEM`에 대한 의존성이 있었고 2차구현 처음에는 `split(SYSTEM.delimiter)`가 거의 모든 `validator` 에서 사용되기에 아예 `util`로 만들었습니다. 하지만 모든 `validator` 파일마다 끌어다 사용하면 전부 의존성이 생겨서 혹시나 다른 메서드나 필요가 없어지면 전체 파일을 찾아다니면서 수정해야합니다.

> 1차 구현 코드

```js
import { SYSTEM } from '../../../constants/System.js';

export const isLanguageValid = (input) => {
  return input.split(SYSTEM.delimiter).every((name) => {
    const pattern = new RegExp(`[^${SYSTEM.koreanPattern}${SYSTEM.englishPattern}]+`, 'g');
    return !pattern.test(name);
  });
};
```

> 2차 구현 코드 처음

```js
import { SYSTEM } from '../../../../constants/System.js';
import Converter from '../../../StringConvertor.js';

export default function isValidLanguage(input, languageOption) {
  const names = Converter.splitStringToArrayByDelimiter(input, SYSTEM.delimiter);
  const { korean, english } = languageOption;
  const pattern = new RegExp(`[^${korean}${english}]+`, 'g');

  return names.every((name) => {
    return !pattern.test(name);
  });
}
```

따라서 아래와 같이 의존성을 전부 제거하고 한 단계 위 계층에서 사용한 뒤 인수로 넘겨주록 설계를 바꾸었습니다.

의존 관계를 분리하여 주입을 받는 방법으로 구현하면 아래와 같은 장점이 있습니다.

1. 의존성이 줄어든다.

- 의존한다는 것은 그 의존대상의 변화에 취약합니다.

2. 재사용성이 높은 코드가 된다.

- 다른 곳에서 사용이 가능하다.

3. 테스트하기 좋은 코드가 된다.

> 2차 구현 개선

```js
export default function isValidLanguage(input, languageOption) {
  const { korean, english } = languageOption;
  const pattern = new RegExp(`[^${korean}${english}]+`, 'g');

  return input.every((name) => {
    return !pattern.test(name);
  });
}
```

```js
import { SYSTEM } from '../../constants/System.js';
import Converter from '../StringConvertor.js';
import isValidDelimiter from './utils/is-valid-delimiter/index.js';
import isValidNameLength from './utils/is-valid-name-length/index.js';

const Validators = {
  checkRacingVehicleName(input) {
    const namesArray = Converter.splitStringToArrayByDelimiter(input, SYSTEM.delimiter);

    isValidDelimiter(input, SYSTEM.delimiter);
    isValidNameLength(namesArray);
  },
};
```

- Reference
  - [의존관계 주입 쉽게 이해하기](https://tecoble.techcourse.co.kr/post/2021-04-27-dependency-injection/)

## 6. test.each 사용 (피드백 반영)

이전에는 test함수 안에서 forEach를 통해서 반복적인 테스트를 하거나 여러번 test 함수를 사용하는 식으로 테스트를 하였습니다. 하지만 코드리뷰를 통해 `test.each()` 를 알려주셔서 해당 내용에 대해 공부한뒤 이번 미션에 적용해 보았습니다.

> 이전의 테스트 코드는 아래와 같습니다.
> 이렇게 테스트하면 input의 여러 값중 하나라도 실패하면 어떤 input 때문에 실패하였는지 알기가 어렵습니다.

```js
import isParticularNumber from './index.js';

describe('isParticularNumber', () => {
  test('특정 숫자가 포함되면 true  포함되지 않으면 false 리턴', () => {
    // given
    const inputNumbers = ['5', '3', '2', '7'];
    const targetNumbers = [4, 3, 1, 7];
    const results = [false, true, false, true];

    // when
    // given
    inputNumbers.forEach((number, index) => {
      expect(isParticularNumber(number, targetNumbers[index])).toBe(results[index]);
    });
  });
});
```

> 그렇다고 아래처럼 하나 하나 test를 나누면 동일한 코드가 계속 반복되고 테스트 코드를 작성하는데도 시간이 더 오래 걸리고 유지보수도 어렵습니다.

```js
describe('compareUserWithComputerNumbers', () => {
  test('일치하는게 하나도 없을 때', () => {
    // given
    const userNumber = '123';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 0, strike: 0 });
  });

  test('1개의 숫자가 위치는 다르지만 값은 일치할 때', () => {
    // given
    const userNumber = '623';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 1, strike: 0 });
  });

  test('1개의 숫자가 위치와 값이 모두 일치할 때', () => {
    // given
    const userNumber = '523';

    // when
    const score = BaseballModel.compareUserWithComputerNumbers(
      userNumber,
      BaseballModel.generateGameNumbers(),
    );

    // then
    expect(score).toStrictEqual({ ball: 0, strike: 1 });
  });

  ...
}
```

> test.each 사용
> 이런식으로 test.each를 사용하면 가독성도 올라가고 유지보수도 훨씬 쉬워집니다.  
> 그리고 특정 input에서 에러가 발생하였을 때 정확히 어느 부분인지 알 수 있습니다.

```js
import isValidQuantity from './index.js';

describe('isValidQuantity', () => {
  test.each([
    [['도레', '미파솔', '도레미파솔라', '도레미파솔라시도', '미파', '파솔'], true],
    [['도레', '미파'], true],
  ])(' %s는 유효한 대수입니다.', (input, expected) => {
    expect(isValidQuantity(input)).toBe(expected);
  });

  test.each([
    [['도파'], false],
    [['도레', '미파', '솔라', '시도', '레미', '파솔', '라시'], false],
  ])('%s는 유효하지 않은 대수 입니다.', (input, expected) => {
    expect(isValidQuantity(input)).toBe(expected);
  });
});
```

<br/>

## 7. TDD의 효과

2회차 구현부터는 TDD를 해보고 있습니다.  
물론 처음이라 어려운점도 많고 시간도 오래걸리기는 합니다.
그래도 직접 느껴본 장점 몇 가지가 있습니다.

### 1. 유효성 검사 코드를 만들 때 정말 편리하다

이전에는 유효성 검사 코드를 만들고 직접 코드에 적용하고 node를 통해서 여러가지 값을 넣어보면서 제대로 동작하나 테스트를 했는데 실패하는 테스트 코드를 먼저 만들고 그 테스트를 통과하도록 만드니 코드 기능 테스트도 바로 할 수 있어서 너무 편리했습니다.

### 2. 예상치 못한 버그 잡기

1차 구현할 때는 기능 먼저 구현하고 전체 테스트로 통과하는 거보고 잘 만들어졌구나 판단했는데 이번에 실패하는 테스트 코드 먼저 만들고 성공하도록 테스트를 만드는 과정에서 실수하는 부분을 발견할 수 있었습니다.
즉 이전에 테스트 통과는 운으로 통과했던 것이었습니다.

> 이전 코드 (기능 먼저 구현후 전체 테스트 통과로 정상 동작한다고 판단)
> 첫 레이싱 자동차의 전진 길이가 제일 길때만 정상 동작함

```js
const FinalWinnerSelector = {
  evaluate(data) {
    const winners = [];
    let winnerScore = 0;

    data.forEach((progress, name) => {
      winnerScore = Math.max(winnerScore, progress.length);
      if (winnerScore === progress.length) {
        winners.push(name);
      }
    });

    return winners;
  },
};

export default FinalWinnerSelector;
```

> 현재 코드 (TDD로 실패하는 테스트 코드 만들고 성공하도록 하나하나 만들어감, 오류 발견후 수정)

```js
const FinalWinnerSelector = {
  /**
   * @param {Map} data
   * @returns {string[]}
   */
  evaluate(data) {
    const winners = [];
    const winnerScore = this.getWinnerScore(data);

    data.forEach((progress, name) => {
      if (winnerScore !== progress.length) return;
      winners.push(name);
    });

    return winners;
  },

  /**
   * @param {Map} data
   * @returns {number}
   */
  getWinnerScore(data) {
    let winnerScore = 0;

    data.forEach((progress) => {
      winnerScore = Math.max(winnerScore, progress.length);
    });

    return winnerScore;
  },
};

export default FinalWinnerSelector;
```

TDD가 아직 익숙하지 않아 어렵고 시간이 정말 오래걸리고 잘못 설계하면 갈아 엎는데 엄청난 비용이 들어가지만 그만큼 장점도 존재해서 더 많이 연습을 해야할 것 같습니다.
