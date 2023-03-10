{
  // JavaScript ๐ฉ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript โจ
  // num1 = number ํ์
  // num2 = number ํ์
  // ๋์ number = number๋ฅผ ๋ฆฌํดํด์ค ๊ฒ์ด๋ค.
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript ๐ฉ
  function jsFetchNum(id) {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript โจ
  function tsFetchNum(id: string): Promise<number> {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript โจ
  // ๐ฃ Optional parameter
  // ์ฑ๊ณผ ์ด๋ฆ์ ๋ฐ์์ ์ ์ฒด ์ด๋ฆ์ ์ถ๋ ฅํ๋ ํจ์
  function printName(firstName: string, lastName?: string) {
    console.log(firstName + ' ' + lastName);
  }
  printName('Steve', 'Jobs');

  // ์ฑ๋ง ์ถ๋ ฅํ๋ ค๊ณ  ํ  ๋ ์ค๋ฅ ๋ฐ์
  printName('Elice');

  // ์ฑ๋ง ์ถ๋ ฅํ๊ณ  ์ถ์ ๋

  // 1์ โจ
  // ํจ์์ ํด๋น parameter์ ์ต์๋ (?) ์ถ๊ฐ
  // ๊ทธ๋ฌ๋ฉด ๊ฐ์ ์ ๋ฌ๋ฐ์ ์๋ ์๊ณ  ์ ๋ฌ๋ฐ์ ์ ์์ ์๋ ์์ด์ง

  // 2์ โจ
  // ๋ ๋ฒ์งธ ์ธ์์ undefined ์ ๋ฌ
  printName('Anna', undefined);

  // ๐ฃ Default parameter
  // ๋ฉ์ธ์ง๋ฅผ ์ ๋ฌํ๋ฉด ๋ฉ์ธ์ง๋ฅผ ์ถ๋ ฅํ๋ ํจ์
  // ํจ์์ ํ๋ผ๋ฏธํฐ์ ์๋ฌด๋ฐ ๊ฐ์ ๋ฃ์ง ์์ ๊ฒฝ์ฐ Default message ์ถ๋ ฅ
  // ํจ์์ ํ๋ผ๋ฏธํฐ์ ์ต์๋ ์ฒด์ด๋์ ๋ฃ์ผ๋ฉด ์๋ฌด๋ฐ ๊ฐ์ ๋ฃ์ง ์์ ๋ undefined ์ถ๋ ฅ
  function printMessage(message: string = 'Default message') {
    console.log(message);
  }

  printMessage('Hello World');
  printMessage();

  // ๐ฃ Rest parameter
  // ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์ ๋ชจ๋  ์๋ฅผ ๋ํ ๋ค์ number๋ก ๋ฆฌํด
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
