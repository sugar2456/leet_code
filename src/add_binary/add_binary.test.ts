import addBinary from ".";

describe('addBinary', () => {
    it('11 + 1 = 100', () => {
        expect(addBinary('11', '1')).toBe('100');
    });
    it('1010 + 1011 = 10101', () => {
        expect(addBinary('1010', '1011')).toBe('10101');
    });
    it('0 + 0 = 0', () => {
        expect(addBinary('0', '0')).toBe('0');
    }
    );
    it('1 + 0 = 1', () => {
        expect(addBinary('1', '0')).toBe('1');
    }
    );
    it('1 + 1 = 10', () => {
        expect(addBinary('1', '1')).toBe('10');
    }
    );
});