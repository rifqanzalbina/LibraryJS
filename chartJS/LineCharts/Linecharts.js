const data = [
    { year: 2010, value: 10 },
    { year: 2011, value: 20 },
    { year: 2012, value: 30 },
    { year: 2013, value: 40 },
    { year: 2014, value: 50 },
    { year: 2015, value: 40 },
    { year: 2016, value: 30 }
  ];

  const svg = d3.select('#myChart');
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = +svg.attr('width') - margin.left - margin.right;
  const height = +svg.attr('height') - margin.top - margin.bottom;

  const x = d3.scaleLinear().rangeRound([0, width]);
  const y = d3.scaleLinear().rangeRound([height, 0]);

  const line = d3.line()
    .x(d => x(d.year))
    .y(d => y(d.value));

  const g = svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  x.domain(d3.extent(data, d => d.year));
  y.domain([0, d3.max(data, d => d.value)]);

  g.append('g')
    .attr('class', 'axis axis-x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));

  g.append('g')
    .attr('class', 'axis axis-y')
    .call(d3.axisLeft(y).ticks(5))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Value');

  g.append('path')
    .datum(data)
    .attr('class', 'line')
    .attr('d', line);