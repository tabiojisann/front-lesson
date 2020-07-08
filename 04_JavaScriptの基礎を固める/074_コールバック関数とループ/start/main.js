function anything(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function kakezann(a, b) {
  return a * b;
}
function tasizann(a, b) {
  return a + b;
}

anything(2,2, kakezann);
anything(1,44, tasizann);

