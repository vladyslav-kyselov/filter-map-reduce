const OTHER_THRESHOLD = 1;
const populationInWorld = data.reduce((prev, curr) => prev + curr.population, 0);

const listAllCountry = data // відсортований масив по спаданню percentage з усіх країн
  .map((item) => {
    return {
      value: item.population,
      percentage: (item.population * 100) / populationInWorld,
      description: item.country
    }
  })
  .sort((a, b) => b.percentage - a.percentage);

const listPercentageOneAndMore = listAllCountry.filter((country) => country.percentage >= OTHER_THRESHOLD); // країни в яких percentage >= 1
let list;
console.log(listAllCountry);
if ((data.length - listPerceч'ntageOneAndMore.length) >= 2) {
  const other = listAllCountry
    .filter((country) => country.percentage < OTHER_THRESHOLD)
    .reduce((prev, curr) => {
      return {
        value: prev.value + curr.value,
        percentage: prev.percentage + curr.percentage,
        description: 'Other'
      }
    });
  list = [...listPercentageOneAndMore, other];
} else {
  list = listAllCountry;
}

// visualisation
const canvas = document.getElementById('canvas');
canvas.width = 750;
canvas.height = 500;

const ctx = canvas.getContext('2d');
const colors = CSS_COLOR_NAMES.slice(0);

let startAngle = 0;
list.forEach(({percentage, description}, index, list) => {
  // sector
  ctx.beginPath();
  ctx.fillStyle = colors.splice(Math.round(Math.random() * (colors.length - 1)), 1)[0];
  ctx.moveTo(250, 250);
  ctx.arc(250, 250, 200, startAngle, startAngle -= percentage * Math.PI / 50, true);
  ctx.lineTo(250, 250);
  ctx.fill();

  // legend
  const lHeight = 500 / list.length;
  ctx.fillRect(500, lHeight * index + (lHeight - 15) / 2, 15, 15);
  ctx.fillStyle = '#000';
  ctx.fillText(`${description} ( ${percentage.toFixed(2)}%)`, 520, lHeight * index + (lHeight - 15) / 2 + 10);
});
