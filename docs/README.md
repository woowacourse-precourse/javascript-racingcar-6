# 미션 - 자동차 경주

## 전체적인 기능 목록 (전체적인 흐름 중심)

1. **GameStart Feature List**

   1. 자동차 이름을 입력받는다. (\*\* 단 여러개일 경우 ,로 구분하며 5개까지 가능)
   2. 사용자가 몇번 이동할 것인지에 대한 숫자를 입력받는다.
   3. 2.과정에서 입력받은 수만큼 반복하면서 다음 과정을 수행한다.

2. **GameProgress Feature List**

   4. 렌덤한 숫자를 뽑는다.
   5. 만약 렌덤한 숫자가 4이상일 경우 앞으로 전진한다.
   6. 만약 렌덤한 숫자가 4미만일 경우 앞으로 전진하지 않는다.
   7. 각 자동차 이름마다 해당 과정에서 이동한 만큼을 표시한다. (전진 : - , 정지 : 없음)

3. **GameOver Feature List**

   8. 최종 우승자의 이름을 출력한다 (** 단 많을 경우에는 ,로 구분한다**)

## 세부적인 기능 목록 (각 함수의 역할 밎 기능 중심)

### 1. App class

- **game Start Function**
  : 자동차 이름 , 라운드 횟수와 관련된 데이터를 입력받는 함수

  - **getCarNames , validateCarNameLength Function**
    : 자동차 이름과 관련된 데이터를 입력 받고 해당 데이터가 정상적인 값인지 확인하는 함수들

  - **getRoundCount , validateRoundCount Function**
    : 라운트 횟수와 관련된 데이터를 입력 받고 해당 데이터가
    정상적인 값인지 확인하는 함수들

---

- **game Progress Function**
  : 라운드 횟수 만큼 반복하면서 각 자동차 마다 이동한 횟수를 관리하는 함수

  - **printCarNameStatus Function**
    : 각 자동차 마다 얼마나 이동했는지를 출력하는 함수

---

- **game End Function**
  : 최종우승자를 선별하는 함수 (반복문과 조건문을 통해서 최종 우승자를 선별)

### 2. Car class

- **getCarName Function**
  : 차 이름과 관련된 데이터를 보여주는 함수 (UI 로직)

- **getCarPosition Function**
  : 차의 이동 거리와 관련된 데이터를 보여주는 함수(UI 로직)

- **checkPosition Funtion**
  : 차의 이동 거리를 조건에 따라 누적해주는 함수 (비지니스 로직)
