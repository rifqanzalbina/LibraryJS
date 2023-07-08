const data = [
    { label: 'A', value: 30 },
    { label: 'B', value: 50 },
    { label: 'C', value: 20 }
  ];
  
  const width = 200;
  const height = 200;
  const radius = Math.min(width, height) / 2;
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  
  const svg = d3.select('#myChart')
    .attr('width', width)
    .attr('height', height);
  
  const pie = d3.pie()
    .value(d => d.value)
    .sort(null);
  
  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);
  
  const arcs = svg.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')
    .attr('transform', `translate(${width / 2},${height / 2})`);
  
  arcs.append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => colors(i));
  
  arcs.append('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('text-anchor', 'middle')
    .text(d => d.data.label);
  