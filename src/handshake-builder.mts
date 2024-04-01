export type TSkinColor = 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark' | 'yellow';
export type TSupportedSkinColor = Exclude<TSkinColor, 'yellow'>;

export const skinTonesModifiers: Record<TSupportedSkinColor, number> = {
    'light': 0x1F3FB,
    'medium-light': 0x1F3FC,
    'medium': 0x1F3FD,
    'medium-dark': 0x1F3FE,
    'dark': 0x1F3FF,
};

export default function buildHandshakeEmoji(): '🤝';
export default function buildHandshakeEmoji(skinTone: TSkinColor): string;
export default function buildHandshakeEmoji(left: 'yellow', right: 'yellow'): '🤝';
export default function buildHandshakeEmoji(left: TSupportedSkinColor, right?: TSupportedSkinColor): string;
export default function buildHandshakeEmoji(left: TSkinColor = 'yellow', right?: TSkinColor): string {
    if (!right) {
        right = left;
    }

    if ((left === 'yellow' || right === 'yellow') && left !== right) {
        throw new Error('yellow skin tone can only be paired with yellow skin tone due to lack of support in unicode.');
    }

    if (left === 'yellow' && right === 'yellow') {
        return '🤝';
    }

    if (left === right) {
        const skinTone = left as TSupportedSkinColor;
        return String.fromCodePoint(0x1F91D, skinTonesModifiers[skinTone]);
    }

    return String.fromCodePoint(
        0x1FAF1,
        skinTonesModifiers[left as TSupportedSkinColor],
        0x200D,
        0x1FAF2,
        skinTonesModifiers[right as TSupportedSkinColor]
    );
}