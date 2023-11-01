# [레이싱 게임](#레이싱-게임)
## [요약](#요약)
N대의 자동차 중 가장 멀리 이동한 자동차가 우승하는 게임

## 입력
- 자동차의 이름
- 각 자동차마다 5자 이하로 한다.
- 몇번 이동할 것인지 입력
## 출력
- 입력한 이동 횟수만큼 각 자동차 이동 거리 출력
- 가장 많이 이동한 자동차 이름 출력

# [기능 목록](#기능-목록)
## [App](#app-클래스)

- [ ] 프로그램을 시작한다.

## [controller](#controller)

- `conductGame` - 게임을 관리하는 객체를 생성하는 함수

> model과 view사이를 이어주는 역할을 한다.
   
- [x] 내부변수로 자동차 객체를 저장하는 Cars(Set 자료형)와 반복횟수를 저장하는 repeatCount(Number)갖는다.

- [ ] repeatCount만큼 차량들을 이동하면서 DataProcess로 데이터를 전달한다.

- [ ] 위의 기능을 수행 후 우승자 데이터를 DataProcess로 전달한다.

## [view](#view)
- `inputView` : 사용자의 입력을 받는 객체

- [x] 자동차의 이름(들)을 입력한다.<br> 입력 값은 ValidatingTheValue으로 전달된다.

- [x] 몇 번 이동할 것인지 입력받는다.<br> 입력 값은 ValidatingTheValue으로 전달된다.


- `outputView` : 화면에 출력하는 객체

- [x] 우승자(들)를 출력한다. DataProcess에서 인자를 전달받는다.

- [x] 자동차들의 이동거리를 출력한다. DataProcess에서 인자를 전달받는다.

- [x] Error message를 출력한다. ValidatingTheValue에서 throw으로 전달받는다.

- `DataProcess` - 데이터를 가공해주는 객체

- [x] view(inputview) 에서 전달 받은 자동차 이름(들)을 `' , '` 단위로 나누어 각 문자열을 ValidatingTheValue 로 전달한다.

- [x] controller(ConductGame) 에서 전달받은 자동차 객체들의 `이름과 거리 값을 가공`하여 view(outputView) 로 전달한다.

- [x] controller(ConductGame) 에서 전달받은 자동차 객체들의 `거리 값을 비교하여 가장 큰 거리 값을 가진 자동차 객체`의 이름을 view(outputView) 로 전달한다.

> notice 만약 우승자가 2명 이상일 경우 ' , '로 구분하여 전달한다.

- `ValidatingTheValue` - 값을 유효성을 검증하는 객체

- [x] view(inputView) 에서 전달 받은 자동차 이름의 유효성을 검증한다.<br>
1. 이름이 5자 이하인지를 체크한다. 빈 문자열이나 5자 초과는 실패로 간주한다.
2. 유효한 문자인지 체크한다. 출력이 불가능한 문자는 실패로 간주한다.<br>

    `성공 시` controller(ConductGame) 로 데이터를 전달한다.

    `실패 시` Error를 throw한다.<br>

- [x] view(inputView) 에서 전달 받은 이동 횟수의 유효성을 검증한다.<br>
1. 숫자( int )인지를 체크한다. 숫자가 아닐 시 실패로 간주한다.
2. 0에서 1000회 사이인지를 체크한다. 이외의 수는 실패로 간주한다.

    `성공 시` controller(ConductGame) 로 데이터를 전달한다.

    `실패 시` Error를 throw한다.<br>

> notice validata의 내부 함수를 담당하는 validataUtils 객체 추가 생성

## [model](#model)
- `Car` - 자동차 클래스<br>
변수 : 이름, 누적 거리 값<br>
함수 : 랜덤으로 0 ~ 9 사이 값을 생성하는 함수, 생성된 난수가 4 이상인지를 확인하는 함수. 누적 거리 값을 증가시킬 함수.

- [x] controller(ConductGame) 에서 전달 받은 자동차 이름으로 객체를 생성한다.
> notice 누적 거리 변수의 값을 0으로 초기화한다.

- [x] 랜덤으로 0에서 9사이의 값을 생성한다.

- 해당 값을 `4이상인지 확인하는 함수`로 전달한다.

- [x] 생성된 랜덤 값이 4이상인지를 확인한다.

- `4이상일 경우` - 누적 거리 값을 증가시킬 함수로 1(정수)을 전달 후 함수를 종료한다.

- `4미만일 경우` - 함수를 종료한다.

- [x] 누적 거리 변수에 인자로 받은 수를 더해서 저장한다.

## [constant](#constant)

- `ErrorMessage` - ErrorMessage 상수 문자열<br>

- `InputMessage` - InputMessage 상수 문자열<br>

- `OutputMessage` - OutputMessage 상수 문자열 <br>