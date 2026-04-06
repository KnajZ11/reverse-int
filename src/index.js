module.exports = function reverse(n) {
  // throw new Error('Not implemented');
  // Преобразуем число в строку
  const str = Math.abs(n).toString(); // убираем минус
  // Разбиваем на массив символов, переворачиваем, склеиваем
  const reversedStr = str.split('').reverse().join('');
  // Преобразуем обратно в число
  const reversedNum = parseInt(reversedStr, 10);
  // Возвращаем с учётом знака исходного числа
  return n < 0 ? -reversedNum : reversedNum;
};

module.exports = function reverse(n) {
  // Сначала убираем минус с помощью Math.abs
  const absoluteValue = Math.abs(n);
  // Превращаем в строку, переворачиваем и склеиваем
  const reversedString = absoluteValue.toString().split('').reverse().join('');
  // Превращаем обратно в число
  return Number(reversedString);
};
