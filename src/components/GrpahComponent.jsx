import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GraphComponent = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (data && data.length > 0) {
      const svg = d3.select(svgRef.current);
  
      const xScale = d3.scaleTime().range([0, 720]);
      const yScale = d3.scaleLinear().range([440, 0]);
  
      const xAxis = d3.axisBottom().scale(xScale);
      const yAxis = d3.axisLeft().scale(yScale);
  
      svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0, 440)`);
      svg.append('g').attr('class', 'y-axis');
  
      const updateChart = () => {
        const xAxisGroup = svg.select('.x-axis');
        const yAxisGroup = svg.select('.y-axis');
  
        xScale.domain(d3.extent(data, d => d.x));
        yScale.domain([0, d3.max(data, d => d.y)]);
  
        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
  
        const line = d3
          .line()
          .x(d => xScale(d.x))
          .y(d => yScale(d.y));
  
        svg.selectAll('.line').remove();
        svg
          .append('path')
          .datum(data)
          .attr('class', 'line')
          .attr('d', line)
          .attr('stroke', 'red')
          .attr('fill', 'none');
      };
  
      updateChart();
    }
  }, [data]);
  

  return (
    <svg ref={svgRef} width={440} height={440}></svg>
  );
};

export default GraphComponent;
