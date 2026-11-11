# Yaser Nami — React / Next.js

Portfolio site for [yasernami.ir](https://yasernami.ir), converted from the static HTML site to **Next.js App Router** with React Server Components.

## Stack

- Next.js (App Router, Server Components)
- React 19
- TypeScript
- pnpm

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Notes

- Fonts live in `public/fonts`, images in `public/ig`
- FA/EN language toggle is preserved (default: Persian / RTL)
- Interactive pieces (menu, album viewer, marquees, reveal) are client islands; page shell stays server-rendered for fast loads
