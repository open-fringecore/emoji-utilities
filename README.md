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

### Kiss Emoji

```ts
import buildKissEmoji from "emoji-utilities/kiss-builder";

buildKissEmoji(); // => 🧑‍❤️‍💋‍🧑

buildKissEmoji({
    gender: 'person',
    skinTone: 'yellow'
}); // => 🧑‍❤️‍💋‍🧑

buildKissEmoji({
    gender: 'man',
    skinTone: 'dark'
}, {
    gender: 'woman',
    skinTone: 'light'
}); // => 👨🏿‍❤️‍💋‍👩🏻

buildKissEmoji({
    gender: 'woman',
    skinTone: 'medium'
}, {
    gender: 'woman',
    skinTone: 'medium'
}); // => 👩🏽‍❤️‍💋‍👩🏽
```

### Holding Hands Emoji

```ts
import buildHoldingHandsEmoji from "emoji-utilities/holding-hands-builder";

buildHoldingHandsEmoji(); // => 🧑‍🤝‍🧑

buildHoldingHandsEmoji({
    gender: 'person',
    skinTone: 'yellow'
}); // => 🧑‍🤝‍🧑

buildHoldingHandsEmoji({
    gender: 'man',
    skinTone: 'dark'
}, {
    gender: 'woman',
    skinTone: 'light'
}); // => 👨🏿‍🤝‍👩🏻

buildHoldingHandsEmoji({
    gender: 'woman',
    skinTone: 'medium'
}, {
    gender: 'woman',
    skinTone: 'medium'
}); // => 👩🏽‍🤝‍👩🏽
```

### Couple Emoji

```ts
import buildCoupleEmoji from "emoji-utilities/couple-builder";

buildCoupleEmoji(); // => 🧑‍❤️‍🧑

buildCoupleEmoji({
    gender: 'person',
    skinTone: 'yellow'
}); // => 🧑‍❤️‍🧑

buildCoupleEmoji({
    gender: 'man',
    skinTone: 'dark'
}, {
    gender: 'woman',
    skinTone: 'light'
}); // => 👨🏿‍❤️‍👩🏻

buildCoupleEmoji({
    gender: 'woman',
    skinTone: 'medium'
}, {
    gender: 'woman',
    skinTone: 'medium'
}); // => 👩🏽‍❤️‍👩🏽
```


## License

MIT