# repro-nuxt-static-base

> Minimal reproduction for ["nuxt generate" issues with static assets and router base](https://github.com/nuxt/nuxt.js/issues/4544)

This is a minimal demo site that is served at domain root `/` in dev mode but served under `/demo` in production mode.

## Quick Start
To download this repro, install npm dependencies, create and show the dysfunctional static build, run:

```bash
npx github:Loilo/repro-nuxt-static-base
```

## Slow Start
Clone this repo and `cd` to it:
```bash
git clone https://github.com/Loilo/repro-nuxt-static-base.git
cd repro-nuxt-static-base
```

Install npm dependencies:
```bash
npm install
```

For the (functional) dev experience, run
```bash
npm run dev
```

For the dysfunctional static site, run
```bash
npm run generate-and-serve
```
