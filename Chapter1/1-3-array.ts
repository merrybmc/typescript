{
  // π£ Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: number[] = [1, 2, 3, 4];
  const arrNum: Array<number> = [1, 3, 4];

  // readonly νλΌλ―Έν°μ κ°μ μ‘°μν  μ μκ³  μ½κΈ° μ μ©μΌλ‘λ§ κ°λ₯
  function printArray(fruits: readonly string[]) {
    console.log(fruits);
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
  }

  printArray(fruits);

  // π£ Tuple -> interface, type alias, class
  // μλ‘ λ€λ₯Έ νμμ κ°μ κ°μ§ μ μλ λ°°μ΄
  // μ¬μ©νλ κ²μ κΆμ₯νμ§ μμ π©
  // μΈλ±μ€λ‘ κ°μ μ κ·Όνμ¬ μΆλ ₯νλκ² κ°λμ±μ΄ λ¨μ΄μ§
  // reactμ useState hookκ³Ό μ μ¬
  let student: [string, number];
  student = ['name', 123];
  console.log(student);
  console.log(student[0]);
  console.log(student[1]);

  const [name, age] = student;
}
