<img src="https://raw.githubusercontent.com/sabaki-js/sabaki/main/assets/logo.svg" width="120" alt="sabaki logo" />

# @sabaki-js/mail

[![npm](https://img.shields.io/npm/v/%40sabaki-js%2Fmail)](https://www.npmjs.com/package/%40sabaki-js%2Fmail) [![license](https://img.shields.io/npm/l/%40sabaki-js%2Fmail)](https://github.com/sabaki-js/plugin-mail#readme) [![CI](https://github.com/sabaki-js/plugin-mail/actions/workflows/test-battery.yml/badge.svg)](https://github.com/sabaki-js/plugin-mail/actions)

Email triage (8 buckets + phishing suspicion).

Questions: `bucket` (0.889 test / 0.769 end-to-end), `suspicious` (experimental). Anonymized weights, 655 KB. Pass `from` in the input.

## Usage

```ts
import { Sabaki } from "sabaki";
import plugin from "@sabaki-js/mail";

const sabaki = new Sabaki().register(plugin.default ?? plugin);
const r = sabaki.decide({ state: "..." });
// { domain: "mail", decision: ..., confidence: ..., plugin: "@sabaki-js/mail" }
```

Ask another question with `input.question`.

Part of [sabaki](https://github.com/sabaki-js/sabaki) — see the [GUIDE](https://github.com/sabaki-js/sabaki/blob/main/GUIDE.md).

## License

MIT
