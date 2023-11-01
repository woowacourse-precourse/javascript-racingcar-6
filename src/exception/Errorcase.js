class BaseExceptionHandler {
  checkAllException(subError) {
    subError.handleException();
  }

  handleException() {
    throw new Error('잘못된 상속을 하고 있습니다.');
  }
}

export default BaseExceptionHandler;
