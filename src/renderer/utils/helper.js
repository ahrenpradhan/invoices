export const getObject = (OBJ) => (typeof OBJ === 'object' ? OBJ : {});

export const getArray = (arr, elseValue = null) => {
  if (Array.isArray(arr)) {
    return arr;
  }
  return elseValue === null ? [] : elseValue;
};
