'use strict'

import TipCalculator from '../lib/tip-calculator'
import should from 'should'

describe('TipCalculator', () => {
  [
    {
      inputs:  { billAmount: 10, tipAmount: 15 },
      outputs: { tip: 1.50, total: 11.50 }
    }
  ].forEach( (subject) => {
    let tipCalculator

    beforeEach(() => {
      tipCalculator = new TipCalculator(subject.inputs.billAmount, subject.inputs.tipAmount);
    })

    describe('#tip', () => {
      it(`will return \$${subject.outputs.tip}`, () => {
        tipCalculator.tip().should.eql(subject.outputs.tip)
      })
    })
  })
})