import buildHandshakeEmoji from "../src/handshake-builder.mts";

describe("Handshake Emoji Builder", () => {
    it("should return a yellow handshake emoji by default", () => {
        expect(buildHandshakeEmoji()).toBe("🤝");
    });

    it("should return a yellow handshake emoji", () => {
        expect(buildHandshakeEmoji('yellow', 'yellow')).toBe("🤝");
    });

    it("should return same skin tone handshakes if only one value is given", () => {
        expect(buildHandshakeEmoji('yellow')).toBe("🤝");
        expect(buildHandshakeEmoji('light')).toBe("🤝🏻");
        expect(buildHandshakeEmoji('dark')).toBe("🤝🏿");
    });

    it("should not allow yellow paired with any other supported unicode skin tone modifier", () => {
        expect(() => buildHandshakeEmoji('yellow', 'light' as 'yellow')).toThrow(Error);
        expect(() => buildHandshakeEmoji('yellow', 'medium' as 'yellow')).toThrow(Error);
        expect(() => buildHandshakeEmoji('yellow', 'dark' as 'yellow')).toThrow(Error);

        expect(() => buildHandshakeEmoji('light' as 'yellow', 'yellow')).toThrow(Error);
        expect(() => buildHandshakeEmoji('medium' as 'yellow', 'yellow')).toThrow(Error);
        expect(() => buildHandshakeEmoji('dark' as 'yellow', 'yellow')).toThrow(Error);
    });

    it("should return proper handshake emoji for same skin tones", () => {
        expect(buildHandshakeEmoji('light', 'light')).toBe("🤝🏻");
        expect(buildHandshakeEmoji('dark', 'dark')).toBe("🤝🏿");
        expect(buildHandshakeEmoji('medium-dark', 'medium-dark')).toBe("🤝🏾");
    });

    it("should return the proper handshake emoji for different skin tones", () => {
        expect(buildHandshakeEmoji('light', 'medium')).toBe("🫱🏻‍🫲🏽");
        expect(buildHandshakeEmoji('medium', 'dark')).toBe("🫱🏽‍🫲🏿");
        expect(buildHandshakeEmoji('dark', 'light')).toBe("🫱🏿‍🫲🏻");
    });
});