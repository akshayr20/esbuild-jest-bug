export const add = (...theArgs: Array<number>) =>
  theArgs.reduce((p, c) => p + c);

export const sub = (...theArgs: Array<number>) =>
  theArgs.reduce((p, c) => p - c);

export const invokeAdd = () => {
  return add(2, 3);
};

export const invokeSub = () => {
  return sub(2, 3);
};
