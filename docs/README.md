# 기능 목록

## 입력

- [ ] 5자 이하의 자동차 이름(쉼표 기준)을 구분해 입력:  getCarNames()

- [ ] 시도 횟수(이동 횟수) 입력 - getGameCount()

  ### 자동차 이름 검증
    - [ ] 이름 입력값 검증 - validateCarName()
      - [x] [예외] 이름 중복 - validateDuplicateName()
      - [x] [예외] 이름을 하나만 입력 - validateNumberOfNames()
      - [x] [예외] 이름이 5자를 초과하거나 1자 미만일때 - validateNameLength()
      - [x] [예외] 이름에 특수문자가 포함 - validateTypeOfName()

  ### 시도 횟수 검증
    - [ ] 시도 입력값 검증 - validateGameCount()
      - [ ] [예외] 숫자가 아닌 값을 입력 - validateTypeOfCount()
      - [ ] [예외] 0을 입력 - validateRangeOfCount()

## 게임 운영

- [ ] 입력 횟수만큼 게임 실행 - Race#start()
- [ ] 자동차가 게임을 진행 - Race#playRound()
- [ ] 무작위 값이 4 이상이면 전진하고, 미만이면 정지 - Car#move()


## 출력

  - [ ] 게임 라운드 별 실행 결과를 출력 - Race#printRoundResult()
    - `자동차 이름 : --` (전진한 횟수만큼 - 출력)

- [ ] 최종 우승자 발표 - Race#getWinners()
  - [ ] 다중 우승자의 경우 쉼표로 구분
    - `최종 우승자: 이름1, 이름2`
