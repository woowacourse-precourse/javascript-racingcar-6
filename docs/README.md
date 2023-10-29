# 프리코스 2주차 구현 사항

---

## 프로젝트 구조

```shell

```

---

## 기능

1. 

> 상세 기능
>
>

시작 문구 출력
입력창 출력
, 로 구분  
  split(,)  
5자 이하  

시도할 횟수 문의 문구 출력
입력창 출력 (입력값의 제한은 현재 없다)
빈 창 문구 출력

실행결과 최초 한번만 출력
이름: -  형식으로 출력
사용자 갯수만큼 출력
빈 창 문구 출력
(지연시간 만큼 출력하는게 좋을듯?) (테스트에서 에러 날 수 있음)

가장 - 가 긴 사람을 판별
동일한 값이 있으면하면 , 로 문자열 생성
생성된 문자열을 출력
최종 우승자 : 사람 이름 이렇게 출력

애플리케이션을 종료 혹은 제시작(제시작은 요구 사항에 존재하지 않음 여유될 시 구현)

에러핸들러
  문구 : [ERROR] 로 시작

특이사항

내부 인덴트 2까지
(if문 내 if문을 하나만)

각 기능별 test 코드를 작성

### consoleHandler

목적: 반복되는 라이브러리의 import 최소화
기능: 'MissionUtils' 라이브러리의 기능을 반환

- consoleInput()  

 > MissionUtils.Console.readLineAsync()를 반환

- consolePrint()

 > MissionUtils.Console.pring()를 반환  

- getRandomNumberInRange()

 > MissionUtils.Random.PickNumberInRange()를 반환

### errorHandler  / errorCode

목적: 반복되는 코드의 최소화, 담당 기능의 구체화  
기능: 예외처리된 error 혹은 예상치 못한 error를 Promise.reject()로 반환

>  1. 예외 처리 지점에서 오류 코드를 받는다
>  2. 오류 코드가 정의되어 있을 경우 해당 메시지를 반환한다
>  3. 오류 코드가 정의되어 있지 않을 경우 '예상치 못한 에러 발생' 메시지를 반환한다
>  4. 커스텀 Error를 발생 시켜 애플리케이션을 종료한다

### checkInputValid

목적: 담당 기능의 관심사 분리로 함수를 모듈화  
기능: Console로 입력된 값의 유효성을 검사  

- checkCarNameValid()

> 입력값을 배열로 파싱
> 파싱된 배열의 값의 length <= 5 && length > 0 인 값을 판별
> 배열 내에 false가 존재할 경우 error를 발생
> 유효할 경우 파싱된 배열을 반환

- checkRaceCountValid()

> 입력값을 숫자로 변환
> 입력값이 0, 또는 NaN일 경우 해당하는 에러를 발생
> 유효할 경우 변환된 입력값을 반환

### receiveCarName / receiveGameCount

목적: 모듈화된 함수들을 호출  
기능:  

1. input / valid를 실행 후 car의 list, game의 실행 횟수를 반환






2. 

> 상세 기능
>
>

 3.

> 상세 기능
>
>

