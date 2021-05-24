function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const newObj = fn.apply(obj, arg);
  return newObj instanceof Object ? newObj : obj;
}

// 使用的例子：
function GirlFirend(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
}

const xiaoMei = _new(GirlFirend, "Xiao Mei", 18);
console.log(xiaoMei); // GirlFirend {name: "Xiao Mei", age: 18, sayName: ƒ}
