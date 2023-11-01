# 🚀 개선된 점

- 개발 환경과 테스팅 환경 동기화를 위한 요소 확장합니다.
  - 요구사항이 적용된 `.eslintrc.js`와 `.prettierrc` 설정을 [문서](CODE_CONVENTION.md)로 제공하여 협업 환경에서 동일한 코드컨벤션을 제공합니다.
  - `.eslintrc.js`에서 testCode의 `max-depth` 제한을 해제하여 도메인별 자세한 테스트를 가능케합니다.
  - 추가된 요구사항 중 코드 컨벤션과 관련된 내용을 rules에 추가하여 관리합니다.
- 문제를 분석하고, 작성한 기능 명세서를 작성하는 코드를 작성, 테스트 진행 및 커밋하는 것에 초점을 맞춥니다.

```
1. 객체들의 역할과 관계를 분석. (기능명세서 하단 분석목록 기재)
2. 절차지향적인 기능명세서 작성.
3. 기능명세서 단위로 테스트코드를 작성.(내부 구현 X)
4. 구현.
5. 테스트코드 내부를 작성하고 통과.
6. 기능명세서 단위로 commit을 진행.
+ 구현 도중 유동적으로 기능명세서를 변경하며 새로운 설계에 대응.
```

# 📘 Docs

### [> Code Convention](CODE_CONVENTION.md)

ESLint와 Prettier에 대한 설정을 제공합니다.

### [> nvmrc](NVMRC.md)

node.js 버전 동기화를 위한 가이드를 제공합니다.

# ⚙️ DI 도입 및 설계 근거

1주차는 `오버엔지니어링이 발생하지 않도록, 최소한의 기능과 추상화를 적용`하였습니다. 허나, 1주차 미션은 큰 틀에서 바라볼 때, 2주차 미션과 공통적인 부분이 많습니다. 따라서, DI를 사용하여 각 Layer를 최대한 재사용이 가능토록 분리하여 각 객체를 순수함수의 형태로 구현할 예정이며, 이를 3, 4주차에 `재사용`할 수 있도록 구현합니다.

이는 비단, 애플리케이션의 이야기만이 아닙니다. linter와 formatter와 같은 환경설정 파일 및 문서들 또한 요구사항에 맞게 점점 확장시켜나아가며 어느 프로젝트에서든 재사용이 가능케 합니다.

# ✋ 추가된 요구사항

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  => ESLint max-depth 설정 추가(TC 제외)
- **"기능명세서"** 단위로 **commit**을 진행한다.
- Jest를 이용하여 본인이 정리한 **기능 목록**이 정상 동작함을 테스트 코드로 확인한다.
  => 기능명세서 기반 TC 작성, 코드 구현 및 commit.

<br/>
<br/>

# 🎯 기능명세서

🧿 : 테스트코드로 검증이 가능하여 구현한 것.

## Env

- DO : 기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.
- DO : Git의 커밋 단위는 앞 단계에서 docs/README.md에 정리한 기능 목록 단위로 추가한다
- [x] DO NOT : .vscode는 commit 대상에서 제외한다.
- [x] DO : Node.js 18.17.1 버전에서 실행 가능해야 한다.

## Convention(Code, Commit)

- DO : 기능명세서 단위로 commit을 진행한다.
- [x] DO NOT : indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다.

## Input/Output

### Input

- [x] DO : 사용자로부터 입력값을 받는다.
  - [x] DO : 입력값의 공통 유효성을 검사한다.(비어있는 문자열에 대해 예외 처리를 진행한다.) 🧿
- [x] DO : 사용자에게 경주할 자동차의 이름을 입력받는다. 🧿

```bash
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
```

- [x] DO : 사용자에게 경주의 시도 횟수(round)를 입력받는다. 🧿

```bash
시도할 횟수는 몇 회인가요?
```

### Output

- [x] DO : 각 라운드별로 자동차 이름과 전진 상태를 출력한다. 🧿
- [x] DO : 자동차 경주가 끝난 후, 우승한 자동차의 이름을 출력한다. 여러 대의 자동차가 우승했을 경우 쉼표(,)를 사용하여 구분하여 출력한다. 🧿

## Game Flow

### Initialization

- [x] DO : 라운드와 입력받은 자동차들로 게임을 초기화한다. 🧿

### Racing

- [x] DO : 주어진 횟수 동안 게임을 진행한다. 🧿
- [x] DO : 전진하는 조건은 0에서 9 사이의 무작위 값을 얻었을 때 그 값이 4 이상일 때이다. 🧿

### Result

- [x] DO : 경주가 끝난 후 가장 많이 전진한 우승자를 출력한다. 🧿
- [x] DO : 우승자가 여럿일 경우, 우승자를 모두 출력한다. 🧿

```shell
최종 우승자 : pobi, jun
```

## Error Handling

- [x] DO : 에러 출력시 메시지는 [ERROR]로 시작해야 한다. 🧿

# 🐱‍🐉 객체

## RacingGame

의존관계 : Car, RandomGenerator

- [x] DO : 주어진 라운드 수만큼 경주를 진행한다. 🧿
- [x] DO : 각 라운드마다 Car 객체들을 전진시킬지 결정한다.
  - FLOW : 각 racers의 car에 랜덤한 수를 부여하고 전진한다 => 결과를 저장한다. => 라운드가 끝났는지 확인한다.
- [x] DO : 최종 우승자를 결정한다.
- [x] DO NOT : Car 객체의 내부 로직에 직접적으로 개입할 수 없다.

## Car

의존관계 : RacingGame

- [x] DO : 자신의 이름(name)과 현재 위치(position)를 생성자에서 초기화한다.
  - [x] DO NOT: 자동차의 이름은 5자를 넘어선 안된다. 🧿
- [x] DO : move 메서드는 전진시킨다. 🧿
- [x] DO NOT : 외부에서 Car 객체의 상태에 직접 접근하거나 변경할 수 없다.

---

## Refactor

- [x] View는 공통 유효성 검증과 파싱, 메시지 렌더링을 담당하고 validation은 최소화한다.
- [x] View에서 진행하던 유효성 검증을 각 사용처 내부로 이동한다.
- [x] 자동차가 움직이는 조건을 Car 내부로 캡슐화한다. 움직임을 결정한느 숫자는 외부에서 전달받는다.

### 옮겨야 할 테스트

- [x] 객체를 다시 분리하고 아래의 테스트를 해당 객체 내부에서 진행한다.

```js
test('자동차 이름이 5자를 초과하는 경우 예외 처리를 진행한다.', async () => {
  // given
  const invalidCarNames = 'pobipobi,crongcrong,honuxhonux';
  mockQuestions([invalidCarNames]);

  // then
  await expect(view.readCarName()).rejects.toThrow(
    `[ERROR] ${ERROR.message.invalidCarNameLength}`,
  );
});

test('자동차 이름이 중복되는 경우 예외 처리를 진행한다.', async () => {
  // given
  const duplicateCarNames = 'pobi,pobi,cron';
  mockQuestions([duplicateCarNames]);

  // then
  await expect(view.readCarName()).rejects.toThrow(
    `[ERROR] ${ERROR.message.duplicateCarName}`,
  );
});

test('라운드가 0인 경우 예외 처리를 진행한다.', async () => {
  // given
  const invalidRound = '0';
  mockQuestions([invalidRound]);

  // then
  await expect(view.readRound()).rejects.toThrow(
    `[ERROR] ${ERROR.message.invalidRound}`,
  );
});
```
