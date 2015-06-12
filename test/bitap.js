var assert = require('assert')
  , bitap  = require('../lib/bitap')

// h   e   r   e    
// 0   1   2   3   4

// i       a   m    
// 5   6   7   8   9

// s   i   t   t   i   n   g    
// 10  11  12  13  14  15  16  17

// a   t       t   h   e    
// 18  19  20  21  22  23  24

// k   i   t   c   h   e   n    
// 25  26  27  28  29  30  31  32

// s   i   n   k       n   e   x   t    
// 33  34  35  36  37  38  39  40  41  42

// t   o       m   y    
// 43  44  45  46  47  48

// k   i   t   t   e   n 
// 49  50  51  52  53  54
var text = 'here i am sitting at the kitchen sink next to my kitten'

it('should match correctly with distance 1', function () {

  assert.deepEqual(bitap(text, 'ten', 1), [ 15, 31, 53, 54 ])
  assert.deepEqual(bitap(text, 'sin', 1), [ 11, 15, 34, 35 ])
  assert.deepEqual(bitap(text, 'sit', 1), [ 11, 12, 27, 34, 51 ])
  assert.deepEqual(bitap(text, 'kit', 1), [ 12, 26, 27, 50, 51 ])
  assert.deepEqual(bitap(text, 'xyx', 1), [ ])

})

it('should match correctly with distance 2', function () {

  assert.deepEqual(bitap(text, 'match',  2), [ 29 ])
  assert.deepEqual(bitap(text, 'there',  2), [ 3, 23 ])
  assert.deepEqual(bitap(text, 'kitten', 2), [ 15, 31, 52, 53, 54 ])
  assert.deepEqual(bitap(text, 'xyxyxy', 2), [ ])

})

