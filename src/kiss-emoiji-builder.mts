export type TskinColor =
    | 'light'
    | 'medium-light'
    | 'medium'
    | 'medium-dark'
    | 'dark'
    | 'yellow';

export type Tperson =
    | 'young-male'
    | 'adult-male'
    | 'female'
    | 'yellow-male'
    | 'yellow-female'
    | 'yellow-adult-male';

export type TsupportedSkinColor = Exclude<TskinColor, 'yellow'>;
export type TsupportedPerson = Exclude<
    Tperson,
    'yellow-male' | 'yellow-female' | 'yellow-adult-male'
>;

export const skinToneModifiers = {
    light: 0x1f3fb,
    'medium-light': 0x1f3fc,
    medium: 0x1f3fd,
    'medium-dark': 0x1f3fe,
    dark: 0x1f3ff,
};

export const personModifiers = {
    'young-male': 0x1f9d1,
    female: 0x1f469,
    'adult-male': 0x1f468,
};

export function buildKissEmoji(
    person1: Tperson,
    skinColor1: TskinColor,
    person2: Tperson,
    skinColor2: TskinColor,
) {
    return String.fromCodePoint(
        personModifiers[person1 as TsupportedPerson],
        skinToneModifiers[skinColor1 as TsupportedSkinColor],
        0x200d,
        0x2764,
        0xfe0f,
        0x1f48b,
        personModifiers[person2 as TsupportedPerson],
        skinToneModifiers[skinColor2 as TsupportedSkinColor],
    );
}

export default buildKissEmoji;
