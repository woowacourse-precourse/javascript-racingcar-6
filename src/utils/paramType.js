/**
 * default parameter가 이전 매개변수를 참조할 수 있는 기능을 사용해
 * TypeScript와 같이 parameter에 특정 타입만 들어올 수 있게 만들어줍니다.
 * @link https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 * @warning : null과 undefined는 생성자가 없기에 원시타입을 넣어주세요 !
 * @param {*} target : 검증하고자 하는 value
 * @param {TypeofPrimitiveValueType | ReferenceType } type - target의 타입 또는 생성자 함수
 * @typedef {'string' | 'number' | 'boolean' | 'undefined' | 'null'} PrimitiveConstructorType
 * @typedef { Object | Array | Function | Map | Set | ClassValue } ReferenceConstructorType
 * @returns {void}
 * @throws {Error}
 * @example
 * class WooTeCo {}
 * const foo (param, _0 = paramType(param, WooTeCo)) => {} // WooTeCo
 * foo('학생 왕돈까스 먹어') // Error (WooTeCo 형이 들어와야하는데 string 타입이 옴)
 */

export const paramType = (target, type) => {
  if (isNull(target)) {
    if (type === null) {
      throw new Error('[ERROR] null check는 type에 "null" 로 입력해주세요');
    }
    if (type !== 'null') {
      throw new Error(`[ERROR] target은 null인데 type이 ${type}이 아닙니다`);
    }
    return;
  }

  if (isPrimitive(type)) {
    if (typeof target !== type) {
      throw new Error(
        `[ERROR] target : ${target}은 (${type}) 타입이 아닙니다 !`
      );
    }
    return;
  }

  if (isReference(type)) {
    if (type === Object && target.constructor !== Object) {
      throw new Error(
        `[ERROR] ${target.constructor.name}으로 타입검사를 해주세요`
      );
    }

    if (!(target instanceof type)) {
      throw new Error(
        `[ERROR] target : ${target.constructor.name}은 (${type}) 타입이 아닙니다 !`
      );
    }
  }
};

const isNull = (target) => {
  return target === null;
};

const isPrimitive = (type) => {
  return typeof type === 'string';
};

const isReference = (type) => true;
