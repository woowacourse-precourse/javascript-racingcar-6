# 🚘 자동차 경주 미션 🚘

## 📜 기능 목록

### 🏁 경주 시작 전  
#### 입력값 받기
- 경주할 `자동차 이름`을 입력 받기  
  + 자동차 이름의 중복, 길이 확인
- 경주할 `파이널 트랙 횟수`를 입력 받기
  + 트랙 횟수의 자연수 여부 확인 
#### 입력값 전송 및 초기화
- 입력값들을 모델에 전송 및 초기화
- 각 자동차의 초기 위치 `''`로 설정
- `현재 트랙` 0으로 초기화

### 🏁 경주 시작
#### `파이널 트랙`과 `현재 트랙`을 비교 후 경주의 진행 여부를 결정
- 경주를 진행할 경우
    + 자동차의 위치를 랜덤 값에 알맞게 조정하여 Model에 저장
    + 각 자동차의 위치 출력
    + 현재 트랙에 +1 한 후 다음 트랙 `경주 시작`
- 경주를 멈출 경우
    + 우승자 결정 및 출력 후 경주 종료

### 📑 Test Code
#### Validation Test
- [x] 입력 받은 `자동차 이름`의 중복성, 길이 확인에 문제가 없는지 테스트
- [x] 입력 받은 `파이널 트랙 횟수`의 자연수 여부 확인에 문제가 없는지 테스트
  
#### Cars Test
- [x] 자동차의 위치가 알맞게 변경되고 있는지 테스트

#### Winner Test
- [x] 우승자가 알맞게 선정되고 있는지 테스트

## 🗄️ Class Diagram

``` mermaid

classDiagram
  Controller <-- inputView : Passing Input
  Controller --> outputView : Passing Cars, Winners
  Controller --> Cars : Handle Car Model
  Controller --> Track : Handle Track Model
  Controller --> Winner : Handle Winner Model
  Cars --|> movePosition : calls
  Winner --|> assessWinner : calls

  Controller : #car
  Controller : #track
  Controller : #winner

  Controller : preRace() 
  Controller : handleCarsName()
  Controller : handleFinalTrackCount()
  Controller : startRace()
  Controller : handleStatusOutput()
  Controller : handleWinner()

  inputView : readCarName()
  inputView : readFinalTrackNum()

  outputView : printResult()
  outputView : printTrack(cars)
  outputView : printWinners(winners)

  Cars : #carsPosition
  Cars : setCarsPosition(input)
  Cars : setCarsRelocation()
  Cars : getCarsPosition()

  Track : #finalTrackCount
  Track : #currentTrackCount
  Track : setFinalTrackCount(input)
  Track : plusCurrentTrackCount()
  Track : compareTrackCount()
  
  Winner : #winners
  Winner : setWinners(cars)
  Winner : getWinner()
```

## 🗂️ 폴더 구조
```
📂 javascript-baseball-6
├─ .gitignore
├─ .npmrc
├─ README.md
├─ 📂 src
│  ├─ App.js
│  ├─ index.js
│  ├─ 📂 constant
│  │  ├─ CONSTANT.js
│  │  ├─ ERROR.js
│  │  ├─ SETTING.js
│  │  └─ MESSAGE.js
│  ├─ 📂 Controller
│  │  └─ Controller.js
│  ├─ 📂 docs
│  │  └─ README.md
│  ├─ 📂 Model
│  │  │ Model.js
│  │  └─ 📂 utils
│  │     │  assessWinner.js
│  │     └─ movePosition.js
│  ├─ 📂 Validation
│  │  ├─ CarNameValidation.js
│  │  └─ TrackCntValidation.js
│  └─ 📂 view
│     ├─ inputView.js
│     └─ outputView.js
└─ 📂 __tests__
   ├─ ApplicationTest.js
   ├─ StringTest.js
   ├─ ModelTest.js
   ├─ ValidationTest.js
   └─ 📂 ModelTest
      ├─ CarsTest.js
      └─ WinnerTest.js

```