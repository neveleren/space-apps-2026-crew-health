# Demo keys: not secret, not real

`DEMO-flight-surgeon-keypair.json` is a key pair made for the demonstration only. It is published with the code, so anyone can open the messages it seals. Never use it for real health data.

How it is used:
- The server (serve.mjs) seals the text of each message to the doctor on Earth for the public key (`publicJwk`) and writes it to `data/outbox/`, the hand-over point for the station's downlink.
- The ground side opens a message with the private key (`privateJwk`): `node tools/read-outbox.mjs`.

A real deployment makes its own key pair on the ground, keeps the private key there, and gives the station only a file with `kid` and `publicJwk`; `OUTBOX_KEY_FILE=<that file> node serve.mjs` then uses it. The private key never comes to the station.

This folder is never served by serve.mjs.

Made by Claude (Anthropic), an AI system, for team Just For Fun.
