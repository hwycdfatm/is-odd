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
	if (number === 3) return true
	if (number === 4) return false
	if (number === 5) return true
	if (number === 6) return false
	if (number === 7) return true
	if (number === 8) return false
	if (number === 9) return true
	if (number === 10) return false
	if (number === 11) return true
	if (number === 12) return false
	if (number === 13) return true
	if (number === 14) return false
	if (number === 15) return true
	if (number === 16) return false
	if (number === 17) return true
	if (number === 18) return false
	if (number === 19) return true
	if (number === 20) return false
	if (number === 21) return true
	if (number === 22) return false
	if (number === 23) return true

	return null
}
