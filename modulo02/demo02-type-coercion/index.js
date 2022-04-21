99999999999999; // 16
// 1000000000000000

true + 2;
// 3

"21" + true;
// '21true'

"21" - true;
// 20

"21" - -1;
// 22

0.1 + 0.2 === 0.3;
// false

3 > 2 > 1;
// false

3 > 2 >= 1;
// true

"B" + "a" + +"a" + "a";
// 'BaNaNa'

"1" == 1;
"1" === 1;

//  ------------------

console.assert(String(123) === "123", "explicit convertion to string");
console.assert(123 + "" === "123", "implicit convertion to string");

console.assert(
  ("hello" || 123) === "hello",
  "|| returns the first element if both are truth"
);

console.assert(
  ("hello" && 123) === 123,
  "|| returns the last element if both are truth"
);

//  ------------------

const item = {
  name: "Raphael",
  age: 35,
  // string: 1 se nao for primitivo, chama o valueOf
  toString() {
    return `Name: ${this.name}, age: ${this.age}`;
  },
  // number: 1 se nao for primitivo, chama o toString
  valueOf() {
    return { hey: "dude" };
    return 007;
  },
  // ele tem prioridade na parada
  [Symbol.toPrimitive](coercionType) {
    const types = {
      string: JSON.stringify(this),
      number: "0007",
    };

    return types[coercionType] || types.string;
  },
};

// vai retornar Nan pois o toString retornou a string
// console.log("valueOf", Number(item));

// depois de adicionar o toPrimitive
// console.log("String", String(item));
// console.log("Number", Number(item));
// chama a conversão default
// console.log("Date", new Date(item));

console.assert(item + 0 === '{"name":"Raphael","age":35}0');
// console.log("!!item is true?", !!item);
console.assert(!!item);

// console.log("string.concat", "ae".concat(item));
console.assert("ae".concat(item) === 'ae{"name":"Raphael","age":35}');

// console.log("implicit + explicit coercion (using ==)", item == String(item));
console.assert(item == String(item));

const item2 = { ...item, name: "Zézin", age: 20 };
// console.log("New object", item2);
console.assert(item2.name === "Zézin" && item2.age === 20);
