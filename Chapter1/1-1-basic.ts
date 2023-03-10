{
  // number
  const num: number = 10;

  // string
  const str: string = 'Hello World';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // π©
  let age: number | undefined;
  age = undefined;
  age = 10;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let user: null; // π©
  let person: string | null;

  // unknown π© λ¬΄μμ΄λ μ§ λ΄μ μ μλ λ³μ, κ°λ₯νλ©΄ μ°μ§λ§ κ²
  let notSure: unknown = 0;
  notSure = 'Hello unknown';
  notSure = true;

  // any π© λ¬΄μμ΄λ μ§ λ΄μ μ μλ λ³μ2
  let anything: any = 0;
  anything = 'Hello any';

  // void μλ¬΄λ° κ°λ λ¦¬ν΄νμ§ μμ λ, μ£Όλ‘ ν¨μμμ μ¬μ©
  function print() {
    console.log('hello ');
  }

  // never
  // μμμΉλͺ»ν μλ¬κ° λ°μνμ λ νΈμΆν  μ μλ ν¨μ
  // λ°μν μλ¬ λ©μΈμ§λ₯Ό μλ²λ‘ λ³΄λ΄μ λ‘κ·Έλ₯Ό λ¨κΉ
  // λ¦¬ν΄νλ κ°μ΄ μλ€, ν¨μμλ§ μ μΈ
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object
  // μμ νμμ μ μΈν λͺ¨λ  μ€λΈμ νΈ νμμ ν λΉ κ°λ₯
  // μ΄ νμλ μ°μ§ μλ κ²μ΄ μ’μ π©
  let obj: object;
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: 'elice' });
  acceptSomeObject({ animal: 'rabbit' });
}
