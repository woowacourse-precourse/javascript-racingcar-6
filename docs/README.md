### 기능 목록

기능 목록 - `commit id` 의 형태로 작성

---

- [x] 사용자로부터 입력을 받는다.
  - [x] 사용자로부터 `자동차 이름`을 입력받는다. - [`commit d87e529`](https://github.com/ho991217/javascript-racingcar-6/commit/d87e529f826a88fe1423edb30b4d18715bd0621d)
    - [x] `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 라는 문구를 출력한다. - [`commit 6a09f7f`](https://github.com/woowacourse-precourse/javascript-racingcar-6/commit/6a09f7ff8b83c1b89be5c98529bbea7122cf9116)
    - [x] 이름은 5자 이하로 입력받는다. - [`commit 5dd0191`](https://github.com/ho991217/javascript-racingcar-6/commit/5dd01916d72931d7c2fd48b6d148adc85b1ed6b6)
      - [x] 5자 초과일 경우 예외를 발생시킨다.
      - [x] 중복된 이름이 있을 경우 예외를 발생시킨다.
      - [x] 입력값이 없을 경우 예외를 발생시킨다.
    - [x] 입력 받은 문자열을 쉼표`,`를 기준으로 분리한다. - [`commit d87e529`](https://github.com/ho991217/javascript-racingcar-6/commit/d87e529f826a88fe1423edb30b4d18715bd0621d)
      - [x] 쉼표`,` 전후 공백이 있다면 제거한다.
      - [x] 빈 자동차 이름이 있다면 예외를 발생시킨다.
  - [x] 사용자로부터 `시도할 횟수`를 입력받는다. - [`commit 0e3ec9b`](https://github.com/ho991217/javascript-racingcar-6/commit/0e3ec9bd70d2bdba2322571471045d1f41c84c78)
    - [x] `시도할 횟수는 몇 회인가요?` 라는 문구를 출력한다.
    - [x] 입력은 1 이상의 정수만 가능하다.
      - [x] 정수가 아닌 경우 예외를 발생시킨다.
      - [x] 숫자가 아닌 경우 예외를 발생시킨다.
      - [x] 1 미만의 숫자일 경우 예외를 발생시킨다.
      - [x] 입력이 없을 경우 예외를 발생시킨다.

---

- [x] 차수별로 게임을 실행한다. - [`commit feec443`](https://github.com/ho991217/javascript-racingcar-6/commit/feec4434fbe67e4fc16fd25d9d3d7e71461cd8db)
  - [x] 0에서 9까지의 무작위 수 중, 값이 4 이상일 경우 자동차는 전진한다.
  - [x] 실행 결과를 출력하기 전 `실행 결과`라는 문구를 출력한다. - [`commit 4202a96`](https://github.com/ho991217/javascript-racingcar-6/commit/4202a96f59916d78ab386af37fe740e5e103f8db)
  - [x] 각 차수별 실행 결과를 출력한다.
    - [x] 각 플레이어의 이름을 출력한다.
    - [x] 각 플레이어의 전진 결과를 출력한다.
      - [x] 전진 결과만큼 `-`를 출력한다.
    - [x] 각 차수별 실행 결과를 개행문자`\n`를 기준으로 분리한다.
  - [x] 위 과정을 반복 횟수만큼 반복한다.

---

- [x] 게임이 종료된 후 우승자를 출력한다.
  - [x] `최종 우승자 : `라는 문구를 출력한다.
  - [x] 우승자는 한 명 이상일 수 있다.
  - [x] 우승자가 한 명 이상일 경우 이름을 쉼표`,`를 기준으로 구분한다.
