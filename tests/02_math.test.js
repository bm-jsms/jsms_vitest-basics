import Math from '../src/02_math';

describe('Math test', () => {
	it('sum', () => {
		expect(Math.sum(1, 2)).toBe(3);
	});
	it('sub', () => {
		expect(Math.sub(5, 2)).toBe(3);
	});
	it('mul', () => {
		expect(Math.mul(4, 2)).toBe(8);
	});
	it('div', () => {
		expect(Math.div(6, 2)).toBe(3);
	});
	it('div by zero', () => {
		expect(Math.div(6, 0)).toBe(null);
	});
});
