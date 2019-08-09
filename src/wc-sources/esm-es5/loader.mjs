import { a as patchEsm, b as bootstrapLazy } from './core-c965133d.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["nova-badge", [[1, "nova-badge", { "score": [1025] }]]]], options);
    });
};
export { defineCustomElements };
