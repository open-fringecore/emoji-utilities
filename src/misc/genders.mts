export type TGender = 'man' | 'woman' | 'person';

export type TSupportedGender = TGender;

export const genders: Record<TSupportedGender, number> = {
    person: 0x1f9d1,
    woman: 0x1f469,
    man: 0x1f468,
};
