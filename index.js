function Alphabet () {
  this[' '] = 0
  for (var i = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0); i <= z; ++i) {
    this[String.fromCharCode(i)] = 0
  }
}

function preProcess (pattern, k) {
  var m    = pattern.length
    , vars = {
                 t: new Alphabet()
               , T: new Alphabet()
               , S: new Alphabet()
               , Din: 0
               , M1:  0
               , M2:  0
               , M3:  0
               , G:   0
             }

  // for each character in alphabet
  for (var c in vars.t) {

    // calculating t[c]
    {
      var reversedPattern = pattern.split('').reverse().join('')
      for (var i = 0; i < reversedPattern.length; ++i) {
        vars.t[c] = (vars.t[c] << 1) | (reversedPattern[i] !== c ? 1 : 0)
      }
    }

    // calculating T[c]
    {
      var lastShifted  = function (bits, shift, k) {
        return (bits >> shift) & (Math.pow(2, k + 1) - 1)
      }

      var bits = vars.t[c]
      for (var i = 0; i < m - k; ++i) {
        vars.T[c] = (vars.T[c] << (k + 2)) | lastShifted(bits, i, k)
      }
    }

     // calculating S[c]
    var firstSlice = pattern.slice(0, k + 1)
    vars.S[c] = firstSlice.indexOf(c) === -1 ? false : true
  }

  // calculating Din
  var temp = (vars.Din << k) | (Math.pow(2, k+1) -1)
  for (var i = 0; i < m - k; ++i) {
    vars.Din = (vars.Din << (k + 2)) | temp
  }

  // calculating M1
  for (var i = 0; i < m - k; ++i) {
    vars.M1 = (vars.M1 << (k + 2)) | 1
  }

  // calculating M2
  for (var i = 0; i < m - k - 1; ++i) {
    vars.M2 = (vars.M2 << (k + 2)) | 1
  }
  vars.M2 = (vars.M2 << (k + 2)) | (Math.pow(2, k + 1) - 1)

  // calculating M3
  vars.M3 = Math.pow(2, k + 1) - 1

  // Calculating G
  vars.G = 1 << k

  return vars
}

function search (text, vars, k) {
  var n       = text.length
  var D       = vars.Din
    , i       = 0
    , matches = [ ]

  while ((++i) < n) {
    if (vars.S[text[i]]) {

      do {

        var x = (D >> (k + 2)) | vars.T[text[i]]
        D = ((D << 1) | vars.M1) & ((D << (k + 3)) | vars.M2) & (((x + vars.M1) ^ x) >> 1) & vars.Din

        if ((D & vars.G) == 0) {
          matches.push(i)
          D = (D | vars.M3)
        }
      } while ((D != vars.Din) && ((++i) < n))

    }
  }

  return matches
}

module.exports = function (text, pattern, k) {
  var vars = preProcess(pattern, k)
  return search(text, vars, k)
}
