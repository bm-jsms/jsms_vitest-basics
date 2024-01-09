import introduction from '../src/04_introduction';

describe('introduction test', it => {
	it('should return a string with the correct message', () => {
		expect(introduction('Josué', 20)).toMatch(
			"Hi, my name is Josué and I'm 20 years old",
		);
	});

	it('default values'),
		() => {
			expect(introduction()).toMatch(
				"Hi, my name is Daniel and I'm 25 years old",
			);
		};
});
