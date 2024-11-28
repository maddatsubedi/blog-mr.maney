const categoriesLength = 9;

const showMoreColSpan = categoriesLength % 3 === 0 ? 3 : (9 - categoriesLength) % 3;

console.log(showMoreColSpan);