# [bitap]

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][version-img]][version]

Fuzzy string search algorithm that searches for a given pattern in a text respecting an amount of errors
([Levenshtein distance]).

It's a JavaScript implementation of the algorithm present in the paper
[A Faster Algorithm for Approximate String Matching][algorithm] by Ricardo Baeza Yates and Gonzalo Navarro:

![][algorithm-img]

[bitap]:                https://en.wikipedia.org/wiki/Bitap_algorithm
[build]:                https://travis-ci.org/tallesl/node-bitap
[build-img]:            https://travis-ci.org/tallesl/node-bitap.png
[coverage]:             https://coveralls.io/r/tallesl/node-bitap?branch=master
[coverage-img]:         https://coveralls.io/repos/tallesl/node-bitap/badge.png?branch=master
[dependencies]:         https://david-dm.org/tallesl/bitap
[dependencies-img]:     https://david-dm.org/tallesl/bitap.png
[devdependencies]:      https://david-dm.org/tallesl/bitap#info=devDependencies
[devdependencies-img]:  https://david-dm.org/tallesl/bitap/dev-status.png
[version]:              http://badge.fury.io/js/bitap
[version-img]:          https://badge.fury.io/js/bitap.png
[Levenshtein distance]: https://en.wikipedia.org/wiki/Levenshtein_distance
[algorithm]:            http://dcc.uchile.cl/~gnavarro/ps/cpm96.pdf
[algorithm-img]:        https://raw.githubusercontent.com/tallesl/node-bitap/master/algorithm.png

## Usage

```
$ npm install bitap
(...)
$ node
> let bitap = require('bitap')
undefined
> bitap('where is my elephant', 'telephone', 3)
[ 18 ]
```
