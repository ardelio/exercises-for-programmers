'use strict'

import TipCalculator from '../lib/tip-calculator'
import should from 'should'

describe('TipCalculator', () => {
  describe('on init with incorrect parameters', () => {
    [
      {
        inputs: { billAmount: 10, tip: 0.15 },
        outputs: { error: TypeError}
      },
      {
        inputs: { billAmount: 10.001, tip: 15 },
        outputs: { error: RangeError}
      },
      {
        inputs: { billAmount: 'abcd', tip: 15 },
        outputs: { error: TypeError}
      },
      {
        inputs: { billAmount: 10, tip: 'abcd' },
        outputs: { error: TypeError}
      },
      {
        inputs: { billAmount: -10, tip: 15 },
        outputs: { error: TypeError}
      },
      {
        inputs: { billAmount: 10, tip: -15 },
        outputs: { error: TypeError}
      }

    ].forEach( (subject) => {
      let tipCalculator

      describe(`with { billAmount: ${subject.inputs.billAmount}, tip: ${subject.inputs.tip}}`, () => {
        it(`will raise a ${subject.outputs.error.name}`, () => {
          (() => {
            tipCalculator = new TipCalculator(subject.inputs.billAmount, subject.inputs.tip)
          }).should.throw(subject.outputs.error)
        })
      })
    })
  });
  [
    {
      inputs:  { billAmount: 10, tip: 15 },
      outputs: { tip: 1.50, total: 11.50 }
    },
    {
      inputs:  { billAmount: 11.25, tip: 15 },
      outputs: { tip: 1.69, total: 12.94 }
    }
  ].forEach( (subject) => {
    let tipCalculator

    beforeEach(() => {
      tipCalculator = new TipCalculator(subject.inputs.billAmount, subject.inputs.tip)
    })

    describe(`with { billAmount: ${subject.inputs.billAmount}, tip: ${subject.inputs.tip}}`, () => {
      describe('#tip', () => {
        it(`will return \$${subject.outputs.tip}`, () => {
          tipCalculator.tip().should.eql(subject.outputs.tip)
        })
      })

      describe('#total', () => {
        it(`will return \$${subject.outputs.total}`, () => {
          tipCalculator.total().should.eql(subject.outputs.total)
        })
      })
    })

  })
})