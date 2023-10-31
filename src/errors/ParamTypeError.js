class ParamTypeError extends TypeError {
  #TEMPLETE = '[ERROR]';
  #type;

  constructor(message) {
    super();
    this.#type = this.constructor.name;
    this.message = `[${this.#type}] ${message}`;
  }
}

export class PrimitiveTypeError extends ParamTypeError {}
export class ReferenceTypeError extends ParamTypeError {}
export class NullTypeError extends ParamTypeError {}
