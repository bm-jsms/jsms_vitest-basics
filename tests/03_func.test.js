import myFunc from '../src/03_func';

describe('test funct', () => {
	it('verify function', () => {
		expectTypeOf(myFunc).toBeFunction();
	});
	it('verify function return', () => {
		expect(myFunc(1, 2)).toBe(3);
	});
	it('verify function return string', () => {
		expect(myFunc('Hello ', 'World')).toMatch('Hello World');
	});
});
