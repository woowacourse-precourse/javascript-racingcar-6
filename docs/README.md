# 2주차 - 자동차 경주

</br>

# 구현할 기능 목록

</br>

## getCarName()

---

</br>

> `@woowacourse/mission-utils` 의 `Console` API를 사용하여 구현해야 한다.
> `MissionUtils.Console.readLineAsync()` 함수를 사용하여 입력 받고,
> 이름의 길이가 5가 넘어가면 에러를 발생 시켜야 한다.
>
> </br>

### 기능 설명

위의 요구에 맞추어, 하나의 문자열로 자동차들의 이름을 입력 받는다.
만약, 사용자가 자동차의 이름을 입력하지 않았거나, 자동차의 이름이 5글자 이내가 아닌 경우, 에러를 발생시킨다.

</br>
</br>

## getNumOfAttempts()

---

</br>

> `@woowacourse/mission-utils` 의 `Console` API를 사용하여 구현해야 한다.
> `MissionUtils.Console.readLineAsync()` 함수를 사용하여 입력 받고,
> 올바른 입력인지 확인한다.
>
> </br>

### 기능 설명

위의 요구에 맞추어,

1. 사용자의 입력 값이 `0` 이하인 경우
2. 사용자의 입력 값이 숫자형이 아닌 경우

위의 경우, throw new Error를 사용하여 에러를 발생시킨다.

readLineAsync로 입력 받은 값을 숫자형으로 형변환 한다.

</br>
</br>

## performRace(cars)

---

</br>

> 각각의 자동차는 0에서 9 사이의 수 중 랜덤으로 선정된 값이 4 이상일 경우, 앞으로 전진한다.
>
> </br>

### 기능 설명

위의 요구에 맞추어 각각의 자동차 별로 랜덤값을 추출한 후, 4 이상일 경우, car의 position 값을 +1 한다.
position 값은 각각의 자동차가 전진한 횟수를 나타내는 변수이다.

</br>
</br>

## getWinner(cars)

---

</br>

> 최종적으로 가장 멀리 이동한 자동차를 찾아 승자를 선정한다.

</br>
</br>

### 기능 설명

Math.max 함수를 통해 모든 자동차들의 position 값을 비교하여 가장 큰 값을 구한다.
finalPisition(가장 멀리 간 위치) 값이 같은 자동차들로 필터링 하여 해당 position과 같은 값을 가진, 즉 가장 멀리 간 자동차들의 이름만 반환한다.

</br>
</br>

## printWinner(winners)

---

</br>

> 최종 우승자들을 출력한다.

</br>
</br>

### 기능 설명

winners라는 최종 우승자들의 자동차 이름이 담긴 배열을 전달 받아, ','로 구분하여 최종 출력한다.
