import { TSkinColor } from "./handshake-builder.mts";

export type TskinColor =
    | 'light'
    | 'medium-light'
    | 'medium'
    | 'medium-dark'
    | 'dark'
    | 'yellow';

export type TGender =
    | 'man'
    | 'woman'
    | 'person';

export type TSupportedSkinColor = Exclude<TskinColor, 'yellow'>;
export type TSupportedGender = TGender;

export const skinToneModifiers: Record<TSupportedSkinColor, number> = {
    light: 0x1f3fb,
    'medium-light': 0x1f3fc,
    medium: 0x1f3fd,
    'medium-dark': 0x1f3fe,
    dark: 0x1f3ff,
};

export const gender: Record<TSupportedGender, number> = {
    person: 0x1f9d1,
    woman: 0x1f469,
    man: 0x1f468,
};

export type TPerson = {
    gender: TGender,
    skinTone: TSkinColor
};

export function buildKissEmoji(
    left: TPerson = {
        gender: 'person',
        skinTone: 'yellow'
    },
    right: TPerson = {
        gender: 'person',
        skinTone: 'yellow'
    }
) {
    if ((left.skinTone === 'yellow' || right.skinTone === 'yellow') && left.skinTone !== right.skinTone) {
        throw new Error(
            'yellow skin tone can only be paired with yellow skin tone due to lack of support in unicode.',
        );
    }

    if (left.skinTone === 'yellow' && right.skinTone === 'yellow') {
        return String.fromCodePoint(
            gender[left.gender],
            0x200d,
            0x2764,
            0xfe0f,
            0x200d,
            0x1f48b,
            0x200d,
            gender[right.gender],
        );
    }

    return String.fromCodePoint(
        gender[left.gender],
        skinToneModifiers[left.skinTone as TSupportedSkinColor],
        0x200d,
        0x2764,
        0xfe0f,
        0x200d,
        0x1f48b,
        0x200d,
        gender[right.gender],
        skinToneModifiers[right.skinTone as TSupportedSkinColor],
    );
}

export default buildKissEmoji;
