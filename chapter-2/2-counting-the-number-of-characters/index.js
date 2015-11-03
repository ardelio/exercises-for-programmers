'use strict'

require("babel/register");

(require('./lib/counting-characters'))().then((answer) => {
  console.log(answer)
});