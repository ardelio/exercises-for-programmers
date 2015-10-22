'use strict'

class TipCalculator {
  constructor (billAmount, tipRate) {
    validateBillAmount(billAmount)
    validateTip(tipRate)
    this.billAmount = billAmount
    this.tipRate = tipRate
  }

  tip () {
    let tipString = (this.billAmount * this.tipRate / 100).toFixed(2)
    return parseFloat(tipString)
  }

  total () {
    return this.billAmount + this.tip()
  }
}

export default TipCalculator

let validateBillAmount = (billAmount) => {
  let hasCents = /^\d+\.\d{2}$/
  if( isNaN(Number(billAmount)) || Number(billAmount) < 0) {
    throw new TypeError('Not a Number')
  }

  if(! Number.isInteger(billAmount) && ! hasCents.test(billAmount)) {
    throw new RangeError('Bill amount is not a valid $ value. Either $ or $.cc')
  }
}

let validateTip = (tip) => {
  if(! Number.isInteger(tip) || Number(tip) < 0 ) {
    throw new TypeError('Not a valid tip')
  }
}