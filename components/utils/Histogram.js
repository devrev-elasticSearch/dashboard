"use client";
import React from 'react';
import Chart from 'react-apexcharts';
import { useState } from 'react';

function convertData(input) {
  const output = [];

  // Convert sentiment data
  for (const [sentiment, values] of Object.entries(input.sentiment)) {
      output.push({
          name: `${sentiment} sentiment`,
          group: 'sentiment',
          data: values
      });
  }

  // Convert priority data
  for (const [priority, values] of Object.entries(input.priority)) {
      output.push({
          name: `${priority} priority`,
          group: 'priority',
          data: values
      });
  }

  return output;
}

function modifyPropertyNames(data) {
  return data.map(item => {
      const { name, group, data } = item;
      return {
          name,
          group,
          data
      };
  });
}

const ApexChart = (props) => {
    // console.log(props)
    
    // const [series, setSeries] = useState([
    //   {
    //     name: 'Q1 Budget',
    //     group: 'budget',
    //     data: [44000, 55000, 41000, 67000, 22000]
    //   },
    //   {
    //     name: 'Q1 Actual',
    //     group: 'actual',
    //     data: [48000, 50000, 40000, 65000, 25000]
    //   },
    //   {
    //     name: 'Q2 Budget',
    //     group: 'budget',
    //     data: [13000, 36000, 20000, 8000, 13000]
    //   },
    //   {
    //     name: 'Q2 Actual',
    //     group: 'actual',
    //     data: [20000, 40000, 25000, 10000, 12000]
    //   }
    // ]);
    const series=props.series.data;
    // setSeries(props.series)
    const options = {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: props.series.dates
      },
      dataLabels: {
        formatter: val => {
          return val;
        }
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      colors : ['#3d9a37', '#ffc11f', '#e27cae', '#ffb21b', '#ff700a', '#f52500', '#b20303']
    };
  
    // Update the state when the props change
   
  
    return (
        <div>
          <div id="chart">
            <Chart options={options} series={series} type="bar" height={350} />
          </div>
        </div>
      );
    };
  

const Histogram = ({ data }) => {
  if(!data) return;
  // console.log(data)
  if (data.length==0) return (
    <>
    Select a date to show data
    </>
  )
    
  const processData = (data) => {
    const result = {
      dates: [],
      sentiment: { positive: [],  neutral: [],negative: [] },
      priority: { low:[],moderate:[],high:[],severe:[] }
    };

    data.forEach(entry => {
      const filteredData = entry.filtered;
      // console.log(entry.dateRange)
      const dateRange = `${entry.dateRange.fromDate} - ${entry.dateRange.toDate}`;
      result.dates.push(dateRange);

      let sentimentCount = { positive: 0,neutral: 0 , negative: 0 };
      let priorityCount = { low:0,moderate:0,high:0,severe:0 };

      filteredData.forEach(item => {
        const sentiment = item.attributes.sentiment;
        const priority = item.attributes.priority;

        // Update sentiment counts
        if (sentiment === 'positive') {
          sentimentCount.positive++;
        } else if (sentiment === 'negative') {
          sentimentCount.negative++;
        } else {
          sentimentCount.neutral++;
        }

        // Update priority counts
        if (priority === 'High') {
          priorityCount.high++;
        } else if (priority === 'Low') {
          priorityCount.low++;
        } else if (priority === 'Moderate') {
          priorityCount.moderate++;
        } else {
          priorityCount.severe++;
        }
      });

      // Push counts to result arrays
      const totalSentimentCount=sentimentCount.positive+sentimentCount.neutral+sentimentCount.negative;
      const totalPriorityCount=priorityCount.low+priorityCount.moderate+priorityCount.severe+priorityCount.high;
      result.sentiment.positive.push(parseInt((sentimentCount.positive / totalSentimentCount) * 100));

result.sentiment.neutral.push(parseInt((sentimentCount.neutral / totalSentimentCount) * 100));

result.sentiment.negative.push(parseInt((sentimentCount.negative / totalSentimentCount) * 100));

result.priority.low.push(parseInt((priorityCount.low / totalPriorityCount) * 100));

result.priority.moderate.push(parseInt((priorityCount.moderate / totalPriorityCount) * 100));

result.priority.high.push(parseInt((priorityCount.high / totalPriorityCount) * 100));

result.priority.severe.push(parseInt((priorityCount.severe / totalPriorityCount) * 100));
      
    });

    return result;
  };
  // console.log(data)
  const processedData = processData(data);
  // console.log(processedData);
  // console.log(convertData(processedData))
  
  const dates=processedData.dates;
  const series = {
      dates:dates,
      data:modifyPropertyNames(convertData(processedData))}
// Add series for sentiment


  // console.log(series)
  return (
    <div>
      <h2>Sentiment and Analysis Values By Percentages</h2>
      <ApexChart series={series}/>
    </div>
  );
};

export default Histogram;
