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
