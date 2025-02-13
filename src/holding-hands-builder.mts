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

export function buildHoldingHandsEmoji(): '🧑‍🤝‍🧑';
export function buildHoldingHandsEmoji(person: TPerson): string;
export function buildHoldingHandsEmoji(
    left: TPerson & {skinTone: 'yellow'},
    right: TPerson & {skinTone: 'yellow'},
): string;
export function buildHoldingHandsEmoji(
    left: TPerson & {skinTone: TSupportedSkinTone},
    right?: TPerson,
): string;
export function buildHoldingHandsEmoji(
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
            0x1f91d,
            0x200d,
            gender[right.gender],
        );
    }

    return String.fromCodePoint(
        gender[left.gender],
        skinToneModifiers[left.skinTone as TSupportedSkinTone],
        0x200d,
        0x1f91d,
        0x200d,
        gender[right.gender],
        skinToneModifiers[right.skinTone as TSupportedSkinTone],
    );
}

export default buildHoldingHandsEmoji;
