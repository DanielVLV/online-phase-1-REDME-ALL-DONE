function searchInArray(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
}

function numbersInObject(phoneNumbers, name) {
  for (let key in phoneNumbers) {
    if (key === name) return phoneNumbers[key];
  }
}

function nonRepeatingChar(word) {
  const res = word
    .split('')
    .find((el, i, a) => a.indexOf(el) === a.lastIndexOf(el))
    .join('');
}

module.exports = { searchInArray, numbersInObject, nonRepeatingChar };
