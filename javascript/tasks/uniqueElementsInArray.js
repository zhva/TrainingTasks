// require helper.js
//---------------------------------------------------------------------------
//                        uniqueElementsInArray.js
//---------------------------------------------------------------------------
// eslint-disable-next-line camelcase
function deleteDuplicateMembers_V1(userArray) {
  if (!Array.isArray(userArray) || userArray.length < 0) {
    return [];
  }

  for (let i = 0; i < userArray.length; i++) {
    let j = i + 1;
    while (j < userArray.length) {
      if (userArray[i] === userArray[j]) {
        userArray.splice(j, 1);
      }
      else {
        j++;
      }
    }
  }

  return userArray;
}

// eslint-disable-next-line camelcase
function deleteDuplicateMembers_V2(userArray) {
  if (!Array.isArray(userArray) || userArray.length < 0) {
    return [];
  }
  return Array.from(new Set(userArray));
}

// eslint-disable-next-line camelcase
function deleteDuplicateMembers_V3(userArray) {
  if (!Array.isArray(userArray) || userArray.length < 0) {
    return [];
  }

  const uniqueArray = userArray.filter((item, elementIndex, arr) => arr.indexOf(item) === elementIndex);

  return uniqueArray;
}

// eslint-disable-next-line camelcase
function deleteDuplicateMembers_V4(userArray) {
  if (!Array.isArray(userArray) || userArray.length < 0) {
    return [];
  }
  const seen = {};
  return userArray.filter((item) => {
    const hasProperty = Object.prototype.hasOwnProperty.call(seen, item);
    if (hasProperty === false) {
      seen[item] = true;
    }
    return !hasProperty;
  });
}

// eslint-disable-next-line camelcase
function deleteDuplicateMembers_V5(userArray) {
  if (!Array.isArray(userArray) || userArray.length < 0) {
    return [];
  }

  const prims = { boolean: {}, number: {}, string: {} };
  const objs = [];
  return userArray.filter((item) => {
    const type = typeof item;
    if (type in prims) {
      const hasProperty = Object.prototype.hasOwnProperty.call(prims[type], item);
      if (hasProperty === false) {
        prims[type][item] = true;
      }
      return !hasProperty;
    }
    return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });
}

// eslint-disable-next-line camelcase
function deleteDuplicateMembers_V6(userArray) {
  if (!Array.isArray(userArray) || userArray.length < 0) {
    return [];
  }
  const result = [];
  userArray.forEach((item) => {
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  });
  return result;
}

// eslint-disable-next-line camelcase
function deleteDuplicateMembers_V7(userArray) {
  if (!Array.isArray(userArray) || userArray.length < 0) {
    return [];
  }

  const seen = {};
  const out = [];
  const len = userArray.length;
  let j = 0;
  for (let i = 0; i < len; i++) {
    const item = userArray[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }

  return out;
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printArayWithUniqueMembers(id1, id2) {
  const userArray = readArray(id1);
  if (userArray.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printArray(id2, deleteDuplicateMembers_v2(userArray));
  }
}
