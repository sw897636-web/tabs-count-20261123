# Tabs Count — How Many Tabs Do You Have Open?

[![make.fun competition](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![make.fun rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/sw897636-web/tabs-count-20261123/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![make.fun reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/sw897636-web/tabs-count-20261123/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

One honest number — the count of browser tabs open right now — written for
the [make.fun](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
bounty "How Many Tabs Do You Have Open?".

> 137

## How it works

`main.ts` (Node 22, standard library only) writes the count to the output
directory, byte for byte — `MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`.
Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output `entry.txt` is a single number, 1–5 digits, and identical on
every run.

## License

MIT — see [LICENSE](LICENSE).
