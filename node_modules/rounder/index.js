module.exports = function(value, precision) {
	value = Number(value);

	if (typeof precision === 'number' && isFinite(precision)) {
		precision = Math.pow(10, precision);
		value = Math.round(value * precision) / precision;
	}

	return value;
};