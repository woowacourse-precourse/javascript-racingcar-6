## 기능 목록

- [x] 경주 할 자동차 이름을 입력 받는다. - Input#getCarNamesList()
- [x] 몇 번의 이동을 시도할 것인지 입력 받는다. - Input#getPlayCount()
- [ ] 자동차 경주를 한다. - Racing#startRacing()
  - [ ] 차를 전진 시킨다. - Racing#carMove()
    - [ ] 0~9 사이의 무작위 값을 얻어야 한다. - Number#createRandomNum()
    - [ ] 0~9 사이의 값인지 검증 해야 한다 - Validation#validateIsNumZeroToNine()
    - [ ] 무작위 값이 4 이상인지 알 수 있다. - Validation#validateForMove()
  - [ ] 한명 이상의 우승자를 알 수 있다. - Racing#getWinner()
- [ ] 사용자가 잘못된 값을 입력시 검증 해야 한다.
  - [x] 자동차 이름 입력을 검증한다. - Validation#validateCarNameLength()
  - [ ] 시도할 횟수를 검증한다. - Validation#validatePlayCount()
