export type TSkinColor =
    | 'light'
    | 'medium-light'
    | 'medium'
    | 'medium-dark'
    | 'dark'
    | 'yellow';

export type TSupportedSkinColor = Exclude<TSkinColor, 'yellow'>;

export const skinTonesModifiers: Record<TSupportedSkinColor, number> = {
    light: 0x1f3fb,
    'medium-light': 0x1f3fc,
    medium: 0x1f3fd,
    'medium-dark': 0x1f3fe,
    dark: 0x1f3ff,
};

export function buildHandshakeEmoji(): '🤝';
export function buildHandshakeEmoji(skinTone: TSkinColor): string;
export function buildHandshakeEmoji(left: 'yellow', right: 'yellow'): '🤝';
export function buildHandshakeEmoji(
    left: TSupportedSkinColor,
    right?: TSupportedSkinColor,
): string;
export function buildHandshakeEmoji(
    left: TSkinColor = 'yellow',
    right?: TSkinColor,
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
        const skinTone = left as TSupportedSkinColor;
        return String.fromCodePoint(0x1f91d, skinTonesModifiers[skinTone]);
    }

    return String.fromCodePoint(
        0x1faf1,
        skinTonesModifiers[left as TSupportedSkinColor],
        0x200d,
        0x1faf2,
        skinTonesModifiers[right as TSupportedSkinColor],
    );
}

export default buildHandshakeEmoji;
