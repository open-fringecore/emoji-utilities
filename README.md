# emoji-utilities

> An ever expanding library of emoji utilities that is 
> fully tree-shakable.

## Installation

```bash
npm install --save emoji-utilities

# or pnpm
pnpm add emoji-utilities
```

## Usage

### Handshake Emoji

```ts
import buildHandshakeEmoji from "emoji-utilities/handshake-builder";

buildHandshakeEmoji();         // => 🤝
buildHandshakeEmoji('yellow'); // => 🤝

buildHandshakeEmoji('light');         // => 🤝🏻
buildHandshakeEmoji('medium-light');  // => 🤝🏼
buildHandshakeEmoji('medium');        // => 🤝🏽
buildHandshakeEmoji('medium-dark');   // => 🤝🏾
buildHandshakeEmoji('dark');          // => 🤝🏿

buildHandshakeEmoji('dark', 'light');    // => 🫱🏿‍🫲🏻
buildHandshakeEmoji('light', 'medium');  // => 🫱🏻‍🫲🏽
buildHandshakeEmoji('medium', 'dark');   // => 🫱🏽‍🫲🏿
```

## License

MIT