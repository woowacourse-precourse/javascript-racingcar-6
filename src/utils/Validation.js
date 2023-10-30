import { EXCEPTION } from './Constant';

// TODO: Mission 5: 오류 처리 메서드입니다.
const Validation = {
  checkNull(input) {
    if (!input) throw new Error(EXCEPTION.null);
  },
  checkNameLength(input) {
    input.map(name => {
      if (name.length > 6) {
        throw new Error(EXCEPTION.length);
      }
      return name;
    });
  },
  checkCount(input) {
    input.split('').forEach(character => {
      if (!'0123456789'.includes(character)) {
        throw new Error(EXCEPTION.integer);
      }
    });
  },
};

export default Validation;
