# [bitap](https://en.wikipedia.org/wiki/Bitap_algorithm)

[![build](https://travis-ci.org/tallesl/bitap.png)](https://travis-ci.org/tallesl/bitap)
[![coverage](https://coveralls.io/repos/tallesl/bitap/badge.png?branch=master)](https://coveralls.io/r/tallesl/bitap?branch=master)
[![dependencies](https://david-dm.org/tallesl/bitap.png)](https://david-dm.org/tallesl/bitap)
[![devDependencies](https://david-dm.org/tallesl/bitap/dev-status.png)](https://david-dm.org/tallesl/bitap#info=devDependencies)
[![npm module](https://badge.fury.io/js/bitap.png)](http://badge.fury.io/js/bitap)

[![npm](https://nodei.co/npm/bitap.png?mini=true)](https://nodei.co/npm/bitap/)

Fuzzy string search algorithm that searches for a given *pattern* in a *text* respecting an amount of *errors* ([Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance)).

It's a JavaScript implementation of the algorithm present in the paper [A Faster Algorithm for Approximate String Matching](http://dcc.uchile.cl/~gnavarro/ps/cpm96.pdf) by Ricardo Baeza Yates and Gonzalo Navarro:

[![](asset/algorithm.png)](lib/bitap.js)

## Usage

```javascript
$ npm install bitap
bitap@1.0.0 node_modules/bitap
$ node
> var bitap = require('bitap')
undefined
> bitap('where is my elephant', 'telephone', 3)
[ 18 ]
```
