const isOdd = require('./index')
const assert = require('assert')

console.log('Running tests...\n')

// Test implemented cases
assert.strictEqual(isOdd(1), true, '1 should be odd')
console.log('✓ isOdd(1) = true')

// Test not yet implemented (should return null)
assert.strictEqual(isOdd(3), true, '3 should be odd')
assert.strictEqual(isOdd(5), null, '5 not implemented yet')
assert.strictEqual(isOdd(0), null, '0 not implemented yet')
assert.strictEqual(isOdd(2), false, '2 should be even')
console.log('✓ Other numbers return null (not implemented yet)')

// Test invalid inputs
try {
	isOdd(NaN)
	assert.fail('Should throw error for NaN')
} catch (err) {
	assert.strictEqual(err.message, 'Expected a finite number')
}

try {
	isOdd(Infinity)
	assert.fail('Should throw error for Infinity')
} catch (err) {
	assert.strictEqual(err.message, 'Expected a finite number')
}
console.log('✓ Invalid inputs throw errors')

console.log('\n✓ All tests passed!')
console.log('\nNote: Currently only number 1 is implemented.')
console.log('Other numbers will return null until updated!')
