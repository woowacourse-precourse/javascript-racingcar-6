const validTryCount = (tryCount) => {
  if (!Number.isInteger(tryCount) || tryCount < 1) {
    throw new Error('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
  }
  return tryCount;
};

export default validTryCount;
