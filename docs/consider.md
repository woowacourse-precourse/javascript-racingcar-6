# 고려 사항들

## 1. 변경 예상

> 상수는 나중에 파일 따로 배정할 예정
> 이름 길이의 최소 최대 언제든 간편하게 변경가능하도록 또한 구분자도 변경 언제든지 가능하도록 설계

```js
export const isNameLength = (input) => {
  const NAME_LENGTH_MIN = 2;
  const NAME_LENGTH_MAX = 5;
  const DELIMITER = ',';
  return input.split(DELIMITER).every((name) => {
    return name.length >= NAME_LENGTH_MIN && name.length <= NAME_LENGTH_MAX;
  });
};
```
