'use strict'

import inquirer from 'inquirer'
import Promise from 'bluebird'

export default () => new Promise((resolve) => {
  inquirer.prompt(
    [
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      }
    ],
    (answer) => {
      resolve(`Hello ${answer.name}, nice to meet you!`)
    }
  )
})
