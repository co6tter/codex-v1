# codex-v1

## Overview

Next.js と Tailwind CSS で構築した個人ポートフォリオサイトです。
ホームページとプロジェクト一覧・詳細ページを備え、作品紹介を目的としています。

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router / Turbopack)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4

## Prerequisites

- Node.js 22.x（[mise](https://mise.jdx.dev/) での管理を推奨）
- pnpm 10.x

## Setup

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/co6tter/codex-v1.git
   cd codex-v1
   ```

2. 依存関係をインストールします。

   ```bash
   pnpm install
   ```

3. 開発サーバーを起動します。

   ```bash
   pnpm dev
   ```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## Usage

| コマンド | 説明 |
|----------|------|
| `pnpm dev` | Turbopack を使った開発サーバーの起動 |
| `pnpm build` | プロダクションビルドの生成 |
| `pnpm start` | プロダクションビルドのサーバー起動 |
| `pnpm lint` | ESLint によるコードチェック |

## Directory Structure

```
codex-v1/
├── app/                  # Next.js App Router のルートディレクトリ
│   ├── components/       # 共有 UI コンポーネント（Header など）
│   ├── portfolio/        # ポートフォリオ一覧・各プロジェクトページ
│   ├── globals.css       # グローバルスタイル
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # ホームページ
├── public/               # 静的アセット
├── next.config.ts        # Next.js 設定
├── tsconfig.json         # TypeScript 設定
└── package.json          # 依存関係・スクリプト定義
```

## License

MIT
