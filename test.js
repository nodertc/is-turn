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

test('should throws', t => {
  const err = /Argument 1 should be a Buffer./

  t.throws(() => isTurn(1), err)
  t.throws(() => isTurn(NaN), err)
  t.throws(() => isTurn(null), err)
  t.throws(() => isTurn(undefined), err)
  t.throws(() => isTurn({}), err)
  t.throws(() => isTurn(''), err)
  t.throws(() => isTurn(Buffer.alloc(0)), err)

  t.end()
})
