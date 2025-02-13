import buildKissEmoji from "../src/kiss-emoiji-builder.mts";

describe("Kiss Emoji Builder", () => {
    it("should return a yellow persons kiss emoji by default", () => {
        expect(buildKissEmoji()).toBe("🧑‍❤️‍💋‍🧑");
    });

    it("should return a light person and a medium-light person kissing", () => {
        expect(
            buildKissEmoji(
                {gender: 'person', skinTone: 'light'},
                {gender: 'person', skinTone: 'medium-light'}
            )
        ).toBe("🧑🏻‍❤️‍💋‍🧑🏼");
    });

    it("should return a dark skinned man, and light skinned woman kissing", () => {
        expect(
            buildKissEmoji(
                {gender: 'man', skinTone: 'dark'},
                {gender: 'woman', skinTone: 'light'}
            )
        ).toBe("👨🏿‍❤️‍💋‍👩🏻");
    });

    it("should return a medium-dark skinned woman, and medium-light skinned man kissing", () => {
        expect(
            buildKissEmoji(
                {gender: 'woman', skinTone: 'medium-dark'},
                {gender: 'man', skinTone: 'medium-light'}
            )
        ).toBe("👩🏾‍❤️‍💋‍👨🏼");
    });

    it("should return two medium skinned women kissing", () => {
        expect(
            buildKissEmoji(
                {gender: 'woman', skinTone: 'medium'},
                {gender: 'woman', skinTone: 'medium'}
            )
        ).toBe("👩🏽‍❤️‍💋‍👩🏽");
    });
});