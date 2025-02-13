import {genders, type TGender} from './misc/genders.mjs';

import {
    skinToneModifiers,
    TSupportedSkinTone,
    type TSkinTone,
} from './misc/skin-tones.mjs';

export type TPerson = {
    gender: TGender;
    skinTone: TSkinTone;
};

export function buildCoupleWithHeartEmoji(): '🧑‍❤️‍🧑';
export function buildCoupleWithHeartEmoji(person: TPerson): string;
export function buildCoupleWithHeartEmoji(
    left: TPerson & {skinTone: 'yellow'},
    right: TPerson & {skinTone: 'yellow'},
): string;
export function buildCoupleWithHeartEmoji(
    left: TPerson & {skinTone: TSupportedSkinTone},
    right?: TPerson,
): string;
export function buildCoupleWithHeartEmoji(
    left: TPerson = {
        gender: 'person',
        skinTone: 'yellow',
    },
    right?: TPerson,
): string {
    if (!right) {
        right = left;
    }

    if (
        (left.skinTone === 'yellow' || right.skinTone === 'yellow') &&
        left.skinTone !== right.skinTone
    ) {
        throw new Error(
            'yellow skin tone can only be paired with yellow skin tone due to lack of support in unicode.',
        );
    }

    if (left.skinTone === 'yellow' && right.skinTone === 'yellow') {
        return String.fromCodePoint(
            genders[left.gender],
            0x200d,
            0x2764,
            0xfe0f,
            0x200d,
            genders[right.gender],
        );
    }

    return String.fromCodePoint(
        genders[left.gender],
        skinToneModifiers[left.skinTone as TSupportedSkinTone],
        0x200d,
        0x2764,
        0xfe0f,
        0x200d,
        genders[right.gender],
        skinToneModifiers[right.skinTone as TSupportedSkinTone],
    );
}

export default buildCoupleWithHeartEmoji;
