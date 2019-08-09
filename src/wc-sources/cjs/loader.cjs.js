'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f3f3ea72.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["nova-badge.cjs",[[1,"nova-badge",{"score":[1025]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
