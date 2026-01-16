const contains = function(object, value) {
  if (Object.values(object).includes(value)) {
    return true;
  } else {
    for (let sub of Object.values(object)) {
      console.log(sub)
      if (typeof sub === 'object' && sub !== null) {
        if (contains(sub, value)) {
          return true;
        }
      }
    }
  }
  return false;
}



const object = {
  data: {
    duplicate: "e",
    stuff: {
      thing: {
        banana: NaN,
        moreStuff: {
          something: "foo",
          answer: ['42'],
        },
      },
    },
    info: {
      duplicate: "e",
      magicNumber: 44,
      empty: null,
    },
  }
}

console.log(contains(object, 44))

// Do not edit below this line
module.exports = contains;
