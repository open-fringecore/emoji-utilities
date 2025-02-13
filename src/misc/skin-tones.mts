export type TSkinTone =
    | 'light'
    | 'medium-light'
    | 'medium'
    | 'medium-dark'
    | 'dark'
    | 'yellow';


export type TSupportedSkinTone = Exclude<TSkinTone, 'yellow'>;

export const skinToneModifiers: Record<TSupportedSkinTone, number> = {
    light: 0x1f3fb,
    'medium-light': 0x1f3fc,
    medium: 0x1f3fd,
    'medium-dark': 0x1f3fe,
    dark: 0x1f3ff,
};