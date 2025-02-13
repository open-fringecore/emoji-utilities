import {
    skinToneModifiers,
    TSkinTone,
    TSupportedSkinTone,
} from './misc/skinTones.mjs';

export function buildHandshakeEmoji(): '🤝';
export function buildHandshakeEmoji(skinTone: TSkinTone): string;
export function buildHandshakeEmoji(left: 'yellow', right: 'yellow'): '🤝';
export function buildHandshakeEmoji(
    left: TSupportedSkinTone,
    right?: TSupportedSkinTone,
): string;
export function buildHandshakeEmoji(
    left: TSkinTone = 'yellow',
    right?: TSkinTone,
): string {
    if (!right) {
        right = left;
    }

    if ((left === 'yellow' || right === 'yellow') && left !== right) {
        throw new Error(
            'yellow skin tone can only be paired with yellow skin tone due to lack of support in unicode.',
        );
    }

    if (left === 'yellow' && right === 'yellow') {
        return '🤝';
    }

    if (left === right) {
        const skinTone = left as TSupportedSkinTone;
        return String.fromCodePoint(0x1f91d, skinToneModifiers[skinTone]);
    }

    return String.fromCodePoint(
        0x1faf1,
        skinToneModifiers[left as TSupportedSkinTone],
        0x200d,
        0x1faf2,
        skinToneModifiers[right as TSupportedSkinTone],
    );
}

export default buildHandshakeEmoji;
