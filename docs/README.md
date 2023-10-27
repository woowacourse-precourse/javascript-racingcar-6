# ✅ 구현 기능 목록

- map 말고 Array.from()쓸것
- 리드미의 구현 기능 목록과 다르게 코드를 수정할 경우, 리드미 먼저 수정한 후 커밋하고, 코드 구현 후 커밋하자.

## Models

### Car

- Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
- 멤버 변수 : Name, 총이동거리

* [ ] 0에서 9 사이에서 무작위 값을 구한다.(이동거리)
* [ ] 값이 4 이상일 경우 Car는 **전진**한다. (총이동거리 + 이동거리)
* [ ] 값이 3 이하일 경우 Car는 **멈춘다** (+0)

### Name

- [ ] 이름이 5자리 이하인지 검증.
- [ ] 이름 앞뒤로 공백이 있을 경우 trim해준다.

### RaceRound

- [ ] type이 number인지 검증한다.

## Controllers

<!-- ### RacingCarGameBuild

- [ ] -->

### RacingCarGame

- 멤버 변수: 시도 횟수
- 멤버 변수 : Cars 인데 Car인스턴스들이 넣어진 Array?

* [ ] 1. 경주할 자동차 이름 값을 입력 받아서 각각 Car 인스턴스 생성하기.
* [ ] 2. 게임이 시작하면 Car들이 각각 자신의 이동거리 값을 구하게 한다.
* [ ] 3. OutputView에게 각 값을 전달해 한 라운드 결과 출력.
* [ ] 4. 2,3 과정을 시도 횟수만큼 반복한다.
* [ ] 5. Car들의 총이동거리를 받아와 총이동거리가 제일 큰 Car의 Name을 출력한다.
  - [ ] 5-1. 동점자가 있을 경우 둘 다 , + 공백으로 구분하여 출력한다. (앞 뒤는 trim)

## Views

### - InputView

- `Console.readLineAsync`를 사용한다.

* [ ] 사람 이름을 ,로 구분지어 받는다.
* [ ] 시도할 횟수를 입력받는다.

### - OutputView

- `Console.print`를 사용한다.

* ONE_STEP = '-'
* 최종 우승자 : pobi
* 최종 우승자 : pobi, jun

- [ ] '실행 결과'를 출력한다.
- [ ] Car Name들과 Car의 총이동거리 입력 받아 한 라운드 경기 출력(Arry.from(),한 줄 띄기)
- [ ] 최종 우승자를 출력한다.

## Utils

### MESSSAGE

- string들 값만 넣은 객체 Object.freeze로 만들것.

- [ ] 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
- [ ] 시도할 횟수는 몇 회인가요?
