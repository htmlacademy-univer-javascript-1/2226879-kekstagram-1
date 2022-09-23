//Идея функции рандома взята с https://learn.javascript.ru/
//В функциях random() и floor() разбирался на https://developer.mozilla.org/

const customRandom = function(from, to) {
  if (from > to) {
    const third = from;
    from = to;
    to = third;
  } else if (from === to) {
    return from;
  }
  const random = from + Math.random() * (to + 1 - from);
  return Math.floor(random);
};
(customRandom(4, 8));

const lengthCheck = (stringToCheck, maxLength) => stringToCheck.length <= maxLength;
lengthCheck('allowed', 7);
