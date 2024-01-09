class Math {
	static sum(a, b) {
		return a + b;
	}
	static sub(a, b) {
		return a - b;
	}
	static mul(a, b) {
		return a * b;
	}
	static div(a, b) {
		if (b === 0) {
			return null;
		}
		return a / b;
	}
}

export default Math;
