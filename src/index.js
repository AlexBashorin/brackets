module.exports = function check(str, bracketsConfig) {
  // your solution
  // let openBrackets = ['(', '{', '['];
  // let closeBrackets = [')', '}', ']'];

  let arrStr = str.split('');
  for(let i=0; i<arrStr.length; i++) {
    if(arrStr.length % 2 === 0) {
      if(arrStr.flat(Infinity) === null) {
        return false;
      } else {
        return true;
      }
    }
  }
  let flatBrackets = bracketsConfig.flat(Infinity);
  if(flatBrackets !== null) {
    if(flatBrackets.length % 2 === 0) {
      let joinBrackets = flatBrackets.join('');
      if(joinBrackets.flat(Infinity) === null) {
        return false;
      } else {
        return true;
      }
    }
  }

}
