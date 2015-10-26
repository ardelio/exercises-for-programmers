'use strict'

import should from 'should'
import sayingHello from '../lib/saying-hello'


describe('SayingHello', () => {
  let stdin

  beforeEach(() => {
    stdin = require('mock-stdin').stdin()
  })

  it('will produce a greeting with the users name', (done) => {
    process.nextTick(() => {
      stdin.send("Anthony\n")
    })

    sayingHello().then((response) => {
      response.should.eql('Hello Anthony, nice to meet you!')
      done()
    })
  })
})


