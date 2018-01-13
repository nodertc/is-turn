'use strict'

const test = require('tape')
const isTurn = require('./')

test('should work', t => {
  t.false(isTurn(Buffer.from([63, 0x1, 0x2])))
  t.true(isTurn(Buffer.from([64, 0x1, 0x2])))
  t.true(isTurn(Buffer.from([70, 0x1, 0x2])))
  t.true(isTurn(Buffer.from([79, 0x1, 0x2])))
  t.false(isTurn(Buffer.from([80, 0x1, 0x2])))

  t.end()
})

test('should be false', t => {
  t.false(isTurn(1))
  t.false(isTurn(NaN))
  t.false(isTurn(null))
  t.false(isTurn(undefined))
  t.false(isTurn({}))
  t.false(isTurn(''))
  t.false(isTurn(Buffer.alloc(0)))

  t.end()
})
