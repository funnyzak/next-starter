# Next Starter

[![action][ci-image]][ci-url] [![Release Date][rle-image]][rle-url] [![GitHub last commit][last-commit-image]][repository-url] [![tag][tag-image]][rle-url] [![license][license-image]][repository-url]

[ci-image]: https://github.com/funnyzak/next-starter/actions/workflows/test.yml/badge.svg
[ci-url]: https://github.com/funnyzak/next-starter/actions
[license-image]: https://img.shields.io/github/license/funnyzak/next-starter.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/next-starter
[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/next-starter
[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/next-starter?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/next-starter?style=flat-square&lable=commit
[rle-image]: https://img.shields.io/github/release-date/funnyzak/next-starter.svg?label=release
[rle-url]: https://github.com/funnyzak/next-starter/releases/latest
[sg-url]: https://sourcegraph.com/github.com/funnyzak/next-starter
[sg-image]: https://img.shields.io/badge/view%20on-Sourcegraph-brightgreen.svg?style=flat-square
[tag-image]: https://img.shields.io/github/tag/funnyzak/next-starter.svg

NEXT-Starter is a front-end project scaffold based on Next.js 13, which is a good starting point for your next project.

## Features

- Build with Next.js 13;
- With prisma for database;
- With Tailwind CSS and PostCSS for styling;
- With TypeScript for type checking;
- With ESLint and Prettier for code linting;
- With Lint Staged and Husky for pre-commit linting;
- Add rate limit for API;
- Create with t3-cli;
- With Next-auth for authentication;

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Development

Follow is useful commands for development.

```bash
# prisma db migrate and generate
yarn prisma:dev

# production build
yarn build

# start production server
yarn start

# run lint
yarn lint

# export static html
yarn export

# lint and fix
yarn lint:fix

# style and fix
yarn style:fix

# clean node_modules
yarn clean

# deps upgrade
yarn npm:check

# dev with specific env file (default is .env.development)
npx dotenv -e .env._test npx next dev

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Reference

- [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [With Tailwind CSS](https://tailwindcss.com/docs/installation) - learn about Tailwind CSS features and API.
- [With TypeScript](https://www.typescriptlang.org/docs/) - learn about TypeScript features and API.
- [With ESLint](https://eslint.org/docs/user-guide/getting-started) - learn about ESLint features and API.
- [With Prettier](https://prettier.io/docs/en/index.html) - learn about Prettier features and API.
- [T3 App](https://create.t3.gg/en/usage/trpc) - learn about T3 App features and API.
- [Next-i18next](https://github.com/i18next/next-i18next)

## Contribution

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/next-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/next-starter" />
</a>

## License

MIT License © 2023 [funnyzak](https://github.com/funnyzak)
