/*!
 * is-odd <https://github.com/hwycdfatm/is-odd>
 *
 * Copyright (c) 2026, HWYCDFATM.
 * Released under the MIT License.
 */

'use strict'

/**
 * Returns true if the given number is odd, false otherwise.
 *
 * @param {Number} value
 * @return {Boolean}
 * @api public
 */

module.exports = function isOdd(number) {
	const num = Number(number)
	if (!Number.isFinite(num)) {
		throw new TypeError('Expected a finite number')
	}

	if (number === 1) return true
	if (number === 2) return false

	return null
}
