'use strict'

import inquirer from 'inquirer'
import Promise from 'bluebird'

export default () => new Promise((resolve, reject) => {
  inquirer.prompt(
    [
      {
        type: "input",
        name: "inputString",
        message: "What is the input string?"
      }
    ],
    (answer) => {
      let input = answer.inputString
      if(input.length === 0) {
        reject(new Error('Please enter a valid string.'))
      }

      resolve(`${input} has ${input.length} ${pluralizeCharacters(input)}.`)
    }
  )
})

let pluralizeCharacters = (inputString) => {
  if (inputString.length > 1)
    return 'characters'
  return 'character'
}