const isNumber = (value) => typeof value === 'number';
const isString = (value) => typeof value === 'string';
const isNotUndefined = (value) => typeof value !== 'undefined';
const isNull = (value) => value === null;

module.exports = {
  isNumber,
  isString,
  isNotUndefined,
  isNull,
};
