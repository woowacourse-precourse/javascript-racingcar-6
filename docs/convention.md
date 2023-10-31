## 프로그래밍 요구 사항 
- [x] Node.js 18.17.1 버전에서 실행 가능해야 합니다. 
- [x] 외부라이브러리를 사용하지 않습니다. 
- [x] 프로그램 종료시 `process.exit()`를 호출하지 않습니다.
- [x] indent는 2 까지만 허용합니다. [eslint max-depth](https://eslint.org/docs/latest/rules/max-depth)
      ```json
      {
        "rules" : {
            "max-depth" : ["error",2]
        }
      }
      ```

## 외부 환경 설정하기 
- [x] vscode setting을 통해 줄끝을 LF로 통일합니다. 
- [x] ESlint, Prettier을 설정합니다. ESLint에서 air-bnb convention을 설정합니다. 

## 기본 규칙 
- 상수명은 SNAKE_CASE를 사용합니다. 
- .vscode의 setting을 git에 등록하지 않도록 유의 합니다.
- 축약어를 사용하지 않고 명확한 변수명을 사용합니다. 
- 주석을 최소화 합니다. 의미있는 주석에 대해서 고민합니다. 
- 불필요한 console을 남기지 않습니다.

## 추가 규칙 
- TDD를 적용해봅니다.
- MVC 패턴을 적용해봅니다. 
- 상수를 관리하는 객체는 외부에서 변경 불가능하게 구현합니다.

## MVC 규칙
[MVC 패턴](https://www.youtube.com/watch?v=ogaXW6KPc8I)
- Model은 Controller와 View에 의존하지 않아야 한다. (Model 내부에 Controller와 View에 관련된 코드가 있으면 안된다.)

- View는 Model에만 의존해야 하고 Controller에는 의존하면 안됩니다. (View 내부에 Model의 코드만 있을 수 있고, Controller의 코드가 있으면 안됩니다.)

- View가 Model로부터 데이터를 받을 때는, 사용자마다 다르게 보여주어야 하는 데이터에 대해서만 받아야 합니다.

- Controller는 모델과 View에 의존해도 된다. 

- View가 Model로부터 데이터를 받을 때, 반드시 Controller에서 받아야 한다.