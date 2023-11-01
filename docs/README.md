# 미션 - 자동차 경주

## 게임 결과

### 정상 작동

| 우승자가 한명                                                                                                | 우승자가 여러 명                                                                                             |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| ![image](https://github.com/TaePoong719/AlgorithmStudy/assets/98576512/4fbc6caf-4a47-49b0-a511-4bfe0ae54b6b) | ![image](https://github.com/TaePoong719/AlgorithmStudy/assets/98576512/151f9bb3-0474-446f-9a44-db964c83068f) |

### 에러 핸들링

| 6자 이상의 자동차 이름 사용                                                                                  |
| ------------------------------------------------------------------------------------------------------------ |
| ![image](https://github.com/TaePoong719/AlgorithmStudy/assets/98576512/545d286e-4952-47f1-a3f0-aee73c5cc70c) |

| 잘못된 숫자 형식을 입력할 경우                                                                               |
| ------------------------------------------------------------------------------------------------------------ |
| ![image](https://github.com/TaePoong719/AlgorithmStudy/assets/98576512/4c87a137-21b6-40d5-9f18-41943c15cd1a) |

## 기능 목록

### oneGameStart

- 하나의 게임을 실행한다
- 입력 : car_positions(number[])
- 출력 : car_positions(number[])
- 각 자동차 별로 moveForwardByRandom를 이용하여 전진 시킨다
- printRacing을 통해 결과를 출력한다

### moveForwardByRandom

- 0 ~ 9사이 무작위 값을 통하여 무작위 값이 4이상인지 판별한다
- 출력 : moveForward(boolean)

### printRacing

- 각 자동차 별 배열을 통해 출력 포맷에 맞춰 출력한다
- 입력 : car_names(string[]), car_positions(number[])

### printWinner

- 각 자동차의 위치에 따른 순위를 출력한다
- 입력 : car_names(string[]), car_positions(number[])

### validateGameCnt

- 사용자로부터 받은 게임 횟수 입력의 유효성 검증
- 유효하지 않다면 에러를 던짐

### validateCarNames

- 사용자로부터 받은 자동차 이름 입력의 유효성 검증
- 유효하지 않다면 에러를 던짐
