import buildCoupleEmoji from "../src/couple-builder.mts";

describe("Couple with Heart Emoji Builder", () => {
    it("should return a yellow people emoji by default", () => {
        expect(buildCoupleEmoji()).toBe("🧑‍❤️‍🧑");
    });

    it("should return a light person and a medium-light person", () => {
        expect(
            buildCoupleEmoji(
                {gender: 'person', skinTone: 'light'},
                {gender: 'person', skinTone: 'medium-light'}
            )
        ).toBe("🧑🏻‍❤️‍🧑🏼");
    });

    it("should return a dark skinned man, and light skinned woman", () => {
        expect(
            buildCoupleEmoji(
                {gender: 'man', skinTone: 'dark'},
                {gender: 'woman', skinTone: 'light'}
            )
        ).toBe("👨🏿‍❤️‍👩🏻");
    });

    it("should return a medium-dark skinned woman, and medium-light skinned man", () => {
        expect(
            buildCoupleEmoji(
                {gender: 'woman', skinTone: 'medium-dark'},
                {gender: 'man', skinTone: 'medium-light'}
            )
        ).toBe("👩🏾‍❤️‍👨🏼");
    });

    it("should return two medium skinned women", () => {
        expect(
            buildCoupleEmoji(
                {gender: 'woman', skinTone: 'medium'}
            )
        ).toBe("👩🏽‍❤️‍👩🏽");
    });

    it("should return two medium skinned women", () => {
        expect(
            buildCoupleEmoji(
                {gender: 'woman', skinTone: 'medium'},
                {gender: 'woman', skinTone: 'medium'}
            )
        ).toBe("👩🏽‍❤️‍👩🏽");
    });
});