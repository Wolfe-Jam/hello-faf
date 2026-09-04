# hello-faf

**The reference project for FAFb.** A small SvelteKit + FastAPI monorepo whose
[`project.faf`](./project.faf) fills **all 33 Mk4 slots** and scores **100%**.

This is not a running product. The connection string in `project.faf` is a
*shape*, not a live server; nothing here needs an account. It exists so you can
see what a complete FAF context looks like before you author your own.

---

## Drive it

You were sent an install line and the form. In your `~/fafb-drive` folder:

```bash
faf git https://github.com/Wolfe-Jam/hello-faf
```

That clones this repo and scores it. Then the seven-line hour:

```
faf status      →  the 33-slot score
faf check       →  validate
faf gaps        →  what's left (nothing — it's 100%)
faf export      →  AGENTS.md / CLAUDE.md / …
faf compile     →  the .fafb ROM         ← the product step
fafm add "..."  →  etch a memory
fafa "..."      →  answer from the Trinity
```

**Then the part that matters — open your own AI in this folder.** Claude
Code, Cursor, whatever you use daily. Ask it: *"why FastAPI, not Django?"* or
*"why Turborepo, not Nx?"* `AGENTS.md` doesn't inline the answer — by design,
it points your AI at `project.faf` ("Read `project.faf` first") instead of
keeping a second, driftable copy. A capable agent follows that and answers
from fact. Compare the same question in a repo with no `.faf` at all — it
guesses, confidently.

A slot is a decision. An empty one gets re-decided from scratch, in-context,
every session. `project.faf` fills 33 of them once — permanently off the
table. Not one clever answer; every session, from here on, for free. That's
the compound effect.

Then the form: **https://faf.one/fafb-drive** — same questions for everyone.

## What's in here

| Path | |
|---|---|
| `project.faf` | the reference — 33 slots, hand-authored to match the tree |
| `apps/web` | SvelteKit + Tailwind + bits-ui, depends on `@hello-faf/ui` |
| `apps/api` | FastAPI, Python 3.11, illustrative `/health` route |
| `packages/ui` | shared TS component contracts |
| `turbo.json` · `pnpm-workspace.yaml` · `.changeset/` | Turborepo + pnpm + Changesets |

If you change a manifest, change the matching slot in `project.faf`. That's the
whole discipline: the structured file is master.

---

*FAFb — FAF Binary · Context, compiled. Free forever path: [FAF-CLI](https://www.npmjs.com/package/faf-cli) (MIT).*
