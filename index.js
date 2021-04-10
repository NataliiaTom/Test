let array = [
  [
    { type: 'p', r: 1, col: 1 },
    { type: 'p', r: 1, col: 2 },
    { type: 'h', r: 1, col: 3 },
    { type: 'b', r: 1, col: 4 },
    { type: 'h', r: 1, col: 5 },
    { type: 'h', r: 1, col: 6 },
  ],
  [
    { type: 'p', r: 2, col: 1 },
    { type: 'p', r: 2, col: 2 },
    { type: 'h', r: 2, col: 3 },
    { type: 'b', r: 2, col: 4 },
    { type: 'b', r: 2, col: 5 },
    { type: 'b', r: 2, col: 6 },
  ],
  [
    { type: 'p', r: 3, col: 1 },
    { type: 'h', r: 3, col: 2 },
    { type: 'h', r: 3, col: 3 },
    { type: 'b', r: 3, col: 4 },
    { type: 'b', r: 3, col: 5 },
    { type: 'b', r: 3, col: 6 },
  ],
  [
    { type: 'p', r: 4, col: 1 },
    { type: 'h', r: 4, col: 2 },
    { type: 'h', r: 4, col: 3 },
    { type: 'h', r: 4, col: 4 },
    { type: 'h', r: 4, col: 5 },
    { type: 'b', r: 4, col: 6 },
  ],
  [
    { type: 'c', r: 5, col: 1 },
    { type: 'h', r: 5, col: 2 },
    { type: 'h', r: 5, col: 3 },
    { type: 'h', r: 5, col: 4 },
    { type: 'c', r: 5, col: 5 },
    { type: 'c', r: 5, col: 6 },
  ],
  [
    { type: 'c', r: 6, col: 1 },
    { type: 'c', r: 6, col: 2 },
    { type: 'h', r: 6, col: 3 },
    { type: 'h', r: 6, col: 4 },
    { type: 'b', r: 6, col: 5 },
    { type: 'h', r: 6, col: 6 },
  ],
  [
    { type: 'c', r: 7, col: 1 },
    { type: 'c', r: 7, col: 2 },
    { type: 'c', r: 7, col: 3 },
    { type: 'p', r: 7, col: 4 },
    { type: 'p', r: 7, col: 5 },
    { type: 'h', r: 7, col: 6 },
  ],
];

function findNeighbors(row, el) {
  let newArr = [];
  for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
    let element = row[columnIndex];
    if (
      el.type == element.type &&
      el.r == element.r &&
      (element.col - 1 == el.col || element.col + 1 == el.col)
    ) {
      newArr.push(element);
    } else if (
      el.type == element.type &&
      el.col == element.col &&
      (element.r - 1 == el.r || element.r + 1 == el.r)
    ) {
      newArr.push(element);
    }
  }
  return newArr;
}

function findElements(array, el) {
  return populateElements(array, el, []);
}

function populateElements(array, el, acc) {
  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    const row = array[rowIndex];
    findNeighbors(row, el).forEach((x) => {
      if (!acc.includes(x)) {
        acc.push(x);
        populateElements(array, x, acc);
      }
    });
  }

  return acc;
}

findElements(array, { type: 'h', r: 4, col: 3 });
