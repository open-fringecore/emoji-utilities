import buildHoldingHandsEmoji from '../src/holding-hands-builder.mts';

describe('Holding Hand Emoji Builder', () => {
    it('should return a yellow persons holding-hand emoji by default', () => {
        expect(buildHoldingHandsEmoji()).toBe('🧑‍🤝‍🧑');
    });

    it('should return a light person and a medium-light person', () => {
        expect(
            buildHoldingHandsEmoji(
                {gender: 'person', skinTone: 'light'},
                {gender: 'person', skinTone: 'medium-light'},
            ),
        ).toBe('🧑🏻‍🤝‍🧑🏼');
    });

    it('should return a dark skinned man, and light skinned woman', () => {
        expect(
            buildHoldingHandsEmoji(
                {gender: 'man', skinTone: 'dark'},
                {gender: 'woman', skinTone: 'light'},
            ),
        ).toBe('👨🏿‍🤝‍👩🏻');
    });

    it('should return a medium-dark skinned woman, and medium-light skinned man', () => {
        expect(
            buildHoldingHandsEmoji(
                {gender: 'woman', skinTone: 'medium-dark'},
                {gender: 'man', skinTone: 'medium-light'},
            ),
        ).toBe('👩🏾‍🤝‍👨🏼');
    });

    it('should return two medium skinned women', () => {
        expect(
            buildHoldingHandsEmoji({gender: 'woman', skinTone: 'medium'}),
        ).toBe('👩🏽‍🤝‍👩🏽');
    });

    it('should return two medium skinned women', () => {
        expect(
            buildHoldingHandsEmoji(
                {gender: 'woman', skinTone: 'medium'},
                {gender: 'woman', skinTone: 'medium'},
            ),
        ).toBe('👩🏽‍🤝‍👩🏽');
    });
});
