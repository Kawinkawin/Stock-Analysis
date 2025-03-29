import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const API_KEY = 'NQF5EY3IOQTPKBAJ';
const FUNCTION = 'TIME_SERIES_INTRADAY';
const INTERVAL = '5min';

function IntradayChart({searchKey}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.alphavantage.co/query?function=${FUNCTION}&interval=${INTERVAL}&symbol=${searchKey}&apikey=${API_KEY}`);
        const result = await response.json();

        if (result['Time Series (5min)']) {
          // Extract and format the data
          const timeSeries = result['Time Series (5min)'];
          const formattedData = Object.keys(timeSeries).map(key => ({
            date: key,
            open: parseFloat(timeSeries[key]['1. open']),
            high: parseFloat(timeSeries[key]['2. high']),
            low: parseFloat(timeSeries[key]['3. low']),
            close: parseFloat(timeSeries[key]['4. close']),
            volume: parseInt(timeSeries[key]['5. volume'], 10)
          })).reverse(); // Reverse to display data in chronological order

          setData(formattedData);
        } else {
          console.error('Error fetching data: No "Time Series (5min)" field in response');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchKey]);

  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <ResponsiveContainer width="100%" height="95%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom:10 }}
      >
        <XAxis dataKey="date" tickFormatter={formatXAxis} />
        <YAxis domain={['auto', 'auto']} />
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="close"
          stroke="#108554"
          fill="#108554"
          fillOpacity={0.5}
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default IntradayChart;
