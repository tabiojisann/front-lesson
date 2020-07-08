
// function roland(back) {
//   console.log(back());
// }

// roland( function() {
//   return '俺か俺以外か';
// })



// const roland = function roland(){
//   console.log('俺か,俺以外か');
// }

// roland();

// function roland(callback) {
//   console.log(callback());
// }

// // const remark = function() {
// //   return '俺か俺以外か';
// // }

// roland( function() {
//   return '俺か、俺以外か';
// })

// function roland(me, otherThanThat) {
//   // console.log(me);
//   console.log(me(otherThanThat))
// }

// roland( function(otherThanThat) {
//   return '俺か' + otherThanThat;
// }, '俺以外か');

function roland(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function remark(a, b) {
  return a + b;
}

roland('俺か', '俺以外か', remark);