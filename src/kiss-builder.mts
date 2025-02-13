import {gender, type TGender} from './misc/genders.mjs';
import {
    skinToneModifiers,
    TSupportedSkinTone,
    type TSkinTone,
} from './misc/skinTones.mjs';

export type TPerson = {
    gender: TGender;
    skinTone: TSkinTone;
};

export function buildKissEmoji(): '🧑‍❤️‍💋‍🧑';
export function buildKissEmoji(person: TPerson): string;
export function buildKissEmoji(
    left: TPerson & {skinTone: 'yellow'},
    right: TPerson & {skinTone: 'yellow'},
): '🧑‍❤️‍💋‍🧑';
export function buildKissEmoji(
    left: TPerson & {skinTone: TSupportedSkinTone},
    right?: TPerson,
): string;
export function buildKissEmoji(
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
        skinToneModifiers[left.skinTone as TSupportedSkinTone],
        0x200d,
        0x2764,
        0xfe0f,
        0x200d,
        0x1f48b,
        0x200d,
        gender[right.gender],
        skinToneModifiers[right.skinTone as TSupportedSkinTone],
    );
}

export default buildKissEmoji;
