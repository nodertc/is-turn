'use strict'

const numberInRange = byte => byte >= 64 && byte <= 79

module.exports = isTurn

function isTurn(packet) {
  if (Buffer.isBuffer(packet) && packet.length > 0) {
    return numberInRange(packet[0])
  }

  throw new TypeError('Argument 1 should be a Buffer.')
}
