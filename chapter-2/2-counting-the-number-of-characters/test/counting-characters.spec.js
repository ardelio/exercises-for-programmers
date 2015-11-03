'use strict'

import should from 'should'
import countingCharacters from '../lib/counting-characters'

describe('CountingCharacters', () => {
  let stdin, testCases

  beforeEach( () => {
    stdin = require('mock-stdin').stdin()
  })

  testCases = [
    {
      input: "Howard",
      output: "Howard has 6 characters.",
      type: 'response'
    },
    {
      input: 'Jo',
      output: 'Jo has 2 characters.',
      type: 'response'
    },
    {
      input: 'I',
      output: 'I has 1 character.',
      type: 'response'
    },
    {
      input: '',
      output: 'Please enter a valid string.',
      type: 'reject'
    }
  ]

  testCases.forEach( (subject) => {
    it(`will produce "${subject.output}" for ${subject.input}`, (done) => {
      process.nextTick(() => {
        stdin.send(`${subject.input}\n`)
      })

      if(subject.type === 'response') {
        countingCharacters().then( (response) => {
          response.should.eql(subject.output)
          done()
        })
      } else {
        countingCharacters().error( (e) => {
          e.message.should.eql(subject.output)
          done()
        })
      }
    })
  })
})
