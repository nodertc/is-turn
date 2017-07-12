# is-turn

[![Build Status](https://travis-ci.org/reklatsmasters/is-turn.svg?branch=master)](https://travis-ci.org/reklatsmasters/is-turn)
[![npm](https://img.shields.io/npm/v/is-turn.svg)](https://npmjs.org/package/is-turn)
[![node](https://img.shields.io/node/v/is-turn.svg)](https://npmjs.org/package/is-turn)
[![license](https://img.shields.io/npm/l/is-turn.svg)](https://npmjs.org/package/is-turn)
[![downloads](https://img.shields.io/npm/dm/is-turn.svg)](https://npmjs.org/package/is-turn)

Check if a Buffer is a [TURN](https://tools.ietf.org/html/rfc5766) message. Used for demultiplex packets that are arriving on the same port. Follows [RFC7983](https://tools.ietf.org/html/rfc7983#section-7).

## Usage

```js
const dgram = require('dgram')
const is_turn = require('is-turn')

const socket = dgram.createSocket('udp4')

socket.on('message', (packet) => {
  if (is_turn(packet)) {
    // handle TURN...
  }
})

socket.bind(0)
```

## Related projects

* [`is-dtls`](https://github.com/reklatsmasters/is-dtls) - Check if a Buffer is a [DTLS](https://tools.ietf.org/html/rfc4347) message.
* [`is-stun`](https://github.com/reklatsmasters/is-stun) - Check if a Buffer is a [STUN](https://tools.ietf.org/html/rfc5389) message.
* [`is-rtp`](https://github.com/reklatsmasters/is-rtp) - Check if a Buffer is a [RTP/RTCP](https://tools.ietf.org/html/rfc3550) message.

## License

MIT, 2017 (c) Dmitry Tsvettsikh
