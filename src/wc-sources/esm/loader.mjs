import { a as patchEsm, b as bootstrapLazy } from './core-c965133d.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["nova-badge",[[1,"nova-badge",{"score":[1025]}]]]], options);
  });
};

export { defineCustomElements };
