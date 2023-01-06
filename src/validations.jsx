export const isNotNullAndUndefined = (value) => {
  if (!value.trim() || value !== '') {
    return true;
  }
  return false;
};

export const hasNoSpecialChars = (input) => {
  var exp = /[^A-Za-z 0-9]/g;
  return exp.test(input.val());
};

export const hasMinChars = (input, min) => {
  return input.trim().length >= min;
};
