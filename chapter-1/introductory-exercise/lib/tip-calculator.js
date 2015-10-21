'use strict'

class TipCalculator {
  constructor (billAmount, tipRate) {
    this.billAmount = billAmount
    this.tipRate = tipRate
  }

  tip () {
    return this.billAmount * this.tipRate / 100
  }
}

export default TipCalculator