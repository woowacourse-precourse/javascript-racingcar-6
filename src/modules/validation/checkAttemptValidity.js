function checkAttemptValidity(attemptInput) {
  return /^[1-9]\d*$/.test(attemptInput);
}

export default checkAttemptValidity;
