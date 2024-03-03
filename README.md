# @fmzu/prefecture

日本の都道府県を取り扱うライブラリです。

# Install

```
$ bun i @fmzu/prefecture
```

or

```
$ npm i @fmzu/prefecture
```

# Usage

基本的な使い方。

```ts
import { Prefecture } from "@fmzu/prefecture"

const prefecture = new Prefecture("TOKYO")

const nameJa = prefecture.nameJa // 東京都

const value = prefecture.value // TOKYO
```

日本語から変換する。

```ts
import { Prefecture } from "@fmzu/prefecture"

const prefecture = Prefecture.fromTextJa("石川") // 石川県

const nameJa = prefecture.nameJa // 石川県

const value = prefecture.value // ISHIKAWA
```

## CommonJs

```ts
const { Prefecture } = require("@fmzu/prefecture")

const prefecture = new Prefecture("TOKYO")

const nameJa = prefecture.nameJa // 東京都

const value = prefecture.value // TOKYO
```
