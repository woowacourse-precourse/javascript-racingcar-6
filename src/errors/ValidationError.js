import { ERROR_MESSAGE } from '../constants/index.js'

class ValidationError extends Error {
  constructor(message) {
    super(ERROR_MESSAGE.PRIFIX + message)
    this.name = 'ValidationError'
  }
}

export default ValidationError
