const make = function makeSmthWithArgs(args) {
  const arrArgs = [];
  function logic(...a) {
    if (typeof a[0] != 'function') {
      arrArgs.push(...a);
      return logic;
    } else {
      return arrArgs.reduce((acc, item) => a[0](acc, item));
    }
  }
  logic(args);
  return logic;
}
