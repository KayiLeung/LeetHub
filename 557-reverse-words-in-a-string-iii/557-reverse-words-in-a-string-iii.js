/**
 * @param {string} s
 * @return {string}
 */
function reverseStr(s) {
  const res = [];

  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    res[i] = s[j];
    res[j] = s[i];
    i++;
    j--;
  }

  return res.join('');
}

function reverseWords(s) {
  let word = '';
  let res = '';
  for (let i = 0; i <= s.length; i++) {
    if (s[i] !== ' ' && i !== s.length) {
      word = word + s[i];
    } else {
      res = res + reverseStr(word) + (s[i] || ''); // || '' for the last index
      word = '';
    }
  }

  return res;
}