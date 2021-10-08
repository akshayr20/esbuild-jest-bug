export const add = (...theArgs: Array<number>) => {
  return theArgs.reduce((p, c) => p + c);
};

export const sub = (...theArgs: Array<number>) => {
  return theArgs.reduce((p, c) => p - c);
};

export const helpers = {
  add,
  sub,
};
