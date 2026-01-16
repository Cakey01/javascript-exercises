const insert = function (first, array) {
  const perms = [];
  for (i = 0; i <= array.length; i++) {
    const inserted = array.toSpliced(i, 0, first);
    perms.push(inserted);
  }
  return perms;
}

const permutations = function(array) {
  if (array.length <= 1) {
    return [array];
  } else {
    const first = array.slice(0, 1)[0];
    const rest = array.slice(1);
    const restPerms = permutations(rest);
    let allPerms = []
    for (let perm of restPerms) {
      const inserted = insert(first, perm);
      allPerms.push(...inserted);
    }
    return allPerms;
  }
};

// Do not edit below this line
module.exports = permutations;
