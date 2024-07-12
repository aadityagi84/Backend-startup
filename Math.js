// const math = (a, b) => {
//   return a + b;
// };

// module.exports = math;

// ===================================================================================================================================================
// there will be all of this is correct but if i want to be export many of function from this file , so what can i do noww...... now there will be a some twist ....for exporting some more modules from this file are:=====

const math = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};

module.exports = {
  math,
  sub,
  mul,
};
