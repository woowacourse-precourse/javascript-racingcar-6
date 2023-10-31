// view를 controller입장에서 더 간편하게 사용하기 위한 통합 인터페이스 Io
import Input from './input/Input.js';
import Output from './output/Output.js';

class View {}

class Io extends Input(Output(View)) {}

export default Io;
