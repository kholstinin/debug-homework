function add(a, b) {
  return a + b;
}

function asyncAdd(a, b) {
  return Promise.resolve(a + b);
}

function sub(a, b) {
  return a - b;
}

function pow(a, b) {
  return a ** b;
}

function test(s) {
  return (/cool/s).test(s);
}
