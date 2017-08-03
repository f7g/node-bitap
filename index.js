function Alphabet () {
  this[' '] = 0
  for (let i = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0); i <= z; ++i) {
    this[String.fromCharCode(i)] = 0
  }
}

function preProcess (pattern, k) {
  const m = pattern.length
  const vars = {
    t: new Alphabet(),
    T: new Alphabet(),
    S: new Alphabet(),
    Din: 0,
    M1: 0,
    M2: 0,
    M3: 0,
    G: 0
  }

  // for each character in alphabet
  for (const c in vars.t) {
    // calculating t[c]
    {
      const reversedPattern = pattern.split('').reverse().join('')
      for (let i = 0; i < reversedPattern.length; ++i) {
        vars.t[c] = (vars.t[c] << 1) | (reversedPattern[i] !== c ? 1 : 0)
      }
    }

    // calculating T[c]
    {
      const lastShifted = function (bits, shift, k) {
        return (bits >> shift) & (Math.pow(2, k + 1) - 1)
      }

      const bits = vars.t[c]
      for (let i = 0; i < m - k; ++i) {
        vars.T[c] = (vars.T[c] << (k + 2)) | lastShifted(bits, i, k)
      }
    }

     // calculating S[c]
    const firstSlice = pattern.slice(0, k + 1)
    vars.S[c] = firstSlice.indexOf(c) !== -1
  }

  // calculating Din
  const temp = (vars.Din << k) | (Math.pow(2, k + 1) - 1)
  for (let i = 0; i < m - k; ++i) {
    vars.Din = (vars.Din << (k + 2)) | temp
  }

  // calculating M1
  for (let i = 0; i < m - k; ++i) {
    vars.M1 = (vars.M1 << (k + 2)) | 1
  }

  // calculating M2
  for (let i = 0; i < m - k - 1; ++i) {
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
  const matches = [ ]
  const n = text.length
  let D = vars.Din
  let i = 0

  while ((++i) < n) {
    if (vars.S[text[i]]) {
      do {
        const x = (D >> (k + 2)) | vars.T[text[i]]
        D = ((D << 1) | vars.M1) & ((D << (k + 3)) | vars.M2) & (((x + vars.M1) ^ x) >> 1) & vars.Din

        if ((D & vars.G) === 0) {
          matches.push(i)
          D = (D | vars.M3)
        }
      } while ((D !== vars.Din) && ((++i) < n))
    }
  }
  return matches
}

module.exports = (text, pattern, k) => {
  const vars = preProcess(pattern, k)
  return search(text, vars, k)
}
