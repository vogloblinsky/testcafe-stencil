'use strict';

const core = require('./core-f3f3ea72.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["nova-badge.cjs",[[1,"nova-badge",{"score":[1025]}]]]], options);
});
