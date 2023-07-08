const svg = d3.select('#myChart')
  .attr('width', 400)
  .attr('height', 400);

const data = [10, 20, 30, 40, 50];
const circles = svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', (d, i) => (i * 80) + 50)
  .attr('cy', 200)
  .attr('r', (d) => d)
  .attr('fill', 'steelblue');
