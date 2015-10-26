'use strict'

require("babel/register");

(require('./lib/saying-hello'))().then((answer) => {
  console.log(answer)
});
