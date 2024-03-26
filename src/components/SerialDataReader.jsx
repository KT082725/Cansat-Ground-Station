import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SerialDataReader = () => {
  const [port, setPort] = useState(null);
  const [receivedData, setReceivedData] = useState([]);
  const [error, setError] = useState(null);
  const svgRef = useRef();

  const connectToSerial = async () => {
    try {
      const newPort = await navigator.serial.requestPort();
      await newPort.open({ baudRate: 115200 });
      setPort(newPort);
    } catch (err) {
      setError('Error connecting to serial port: ' + err.message);
    }
  };

  useEffect(() => {
    return () => {
      if (port) {
        port.close();
      }
    };
  }, [port]);

  useEffect(() => {
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

      xScale.domain(d3.extent(receivedData, d => d.x));
      yScale.domain([0, d3.max(receivedData, d => d.y)]);

      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);

      const line = d3
        .line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y));

      svg.selectAll('.line').remove();
      svg
        .append('path')
        .datum(receivedData)
        .attr('class', 'line')
        .attr('d', line)
        .attr('stroke', 'red')
        .attr('fill', 'none');
    };

    updateChart();
  }, [receivedData]);

  useEffect(() => {
    const readData = async () => {
      if (port) {
        let accumulatedData = '';
        const reader = port.readable.getReader();
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              console.log('Read operation complete');
              break;
            }
            if (value) {
              const textDecoder = new TextDecoder();
              const decodedData = textDecoder.decode(value);
              accumulatedData += decodedData;
              if (accumulatedData.includes('\n')) {
                const lines = accumulatedData.split('\n');
                for (let i = 0; i < lines.length - 1; i++) {
                  const integerData = parseInt(lines[i], 10);
                  if (!isNaN(integerData)) {
                    setReceivedData(prevData => [
                      ...prevData,
                      { x: new Date(), y: integerData },
                    ]);
                  }
                }
                accumulatedData = lines[lines.length - 1];
              }
            }
          }
        } catch (err) {
          setError('Error reading data from serial port: ' + err.message);
          reader.releaseLock();
        }
      }
    };

    if (port) {
      readData();
    }
  }, [port]);

  return (
    <div>
      <button onClick={connectToSerial}>Connect to Serial Port</button>
      {error && <div>Error: {error}</div>}
      <h2>Serial Data Line Chart</h2>
      <svg ref={svgRef} width={440} height={440}></svg>
    </div>
  );
};

export default SerialDataReader;
