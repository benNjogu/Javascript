
const numbers = [1, -2, 3, 4];

const filtered = numbers.filter(value => value >= 0);

const items = filtered.map(n => '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);
