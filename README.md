# @sabaki-js/mail

Email triage: bucket (8 classes: social/promotions/updates/forums/personal/services/accounts/spam) and phishing suspicion.

A [sabaki](https://github.com/sabaki-js/sabaki) plugin. Router keywords included:
register it and `Sabaki.decide()` routes matching states here automatically.

## Install

```sh
npm install @sabaki-js/mail sabaki
```

Zero runtime dependencies (bundled TF-IDF weights, 121 Ko).

## Usage

```ts
import { Sabaki } from "sabaki";
import mail from "@sabaki-js/mail";

const sabaki = new Sabaki();
sabaki.register(mail.default ?? mail);
const r = sabaki.decide({ state: "N'oubliez pas de terminer Lupin", from: "Netflix <info@members.netflix.com>" });
// { domain: "mail", decision: "promotions", confidence: 0.71, plugin: "@sabaki-js/mail" }
```

Ask another question with `input.question` (any of the list below).
Note: pass `from` in the input (sender is part of the features).

## Questions (measured on held-out test sets)

- `bucket` — accuracy **0.889** (test, n=1367) / **0.769** end-to-end incl. routing (4 126 mails, Takeout corpus)
- `suspicious` — experimental (13 samples, train recall 1.0, 6 false alarms)

Accuracies are honest test-split numbers, not marketing. See `sabaki` for the
`nano` / `mini` modes and the benchmark methodology.

## License

MIT
