import React, { useState, useEffect } from 'react';
import './LiveGraph.css';
import NewNav from '../../Components/NewNav/NewNav';
import AllTimeChart from '../../Components/Charts/AllTimeChart';
import SingleDayChart from '../../Components/Charts/SingleDayChart';
import StockDetails from '../../Components/StockDetails/StockDetails';
import AboutStock from '../../Components/StockDetails/AboutStock';
import OneWeekChart from '../../Components/Charts/OneWeekChart';
import OneMonthChart from '../../Components/Charts/OneMonthChart';
import OneYearChart from '../../Components/Charts/OneYearChart';
import Footer from '../../Components/Footer';
import LiveDetails from '../../Components/StockDetails/LiveDetails';
import Fundamentals from '../../Components/StockDetails/Fundamentals';
import Analytics from '../../Components/StockDetails/Analytics';

const LiveGraph = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [chartComponent, setChartComponent] = useState(null);

  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };
  const [searchKey, setSearchKey] = useState('IBM');

  const handleSearch = (key) => {
    setSearchKey(key);
  };
  const[select,setSelect]=useState('stock_details');
  const showDetails=(option)=>{
    setSelect(option);
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      switch (selectedTimeframe) {
        case '1D':
          setChartComponent(<SingleDayChart searchKey={searchKey}/>);
          break;
        case '1W':
          setChartComponent(<OneWeekChart searchKey={searchKey}/>);
          break;
        case '1M':
          setChartComponent(<OneMonthChart searchKey={searchKey} />);
          break;
        case '1Y':
          setChartComponent(<OneYearChart searchKey={searchKey}/>);
          break;
        case 'All':
        default:
          setChartComponent(<AllTimeChart searchKey={searchKey}/>);
      }
      setIsLoading(false);
    }, 3000); // Adjust delay as needed
  }, [selectedTimeframe,searchKey]);
  return (
    <div className='graph_page'>
      <NewNav onSearch={handleSearch} />
      
      <div className='graph_container'>
      <div className='btn_container'>
        <div className='live_details'>
         <LiveDetails searchKey={searchKey}/>
         </div>
        <button onClick={() => handleTimeframeChange('1D')}>1D</button>
        <button onClick={() => handleTimeframeChange('1W')}>1W</button>
        <button onClick={() => handleTimeframeChange('1M')}>1M</button>
        <button onClick={() => handleTimeframeChange('1Y')}>1Y</button>
        <button onClick={() => handleTimeframeChange('All')}>All</button>
      </div>
        {isLoading ? (
          <div className='loading_container'>
            <img src="loadingGif.gif" alt='Loading...' />
          </div>
        ) : (
          chartComponent
        )}
      </div>
     <div className='select_container'>
      <div className='button_container'>
      <button className='select_btn' onClick={(()=>showDetails('stock_details'))}><b>Stock Details</b></button>
      <button className='select_btn' onClick={(()=>showDetails('fundamentals'))}><b>Valuation Metrics</b></button>
      <button className='select_btn' onClick={(()=>showDetails('analytics'))}><b>Analyst Rating</b></button>
      </div>
     </div>
      <div className='details_container'>
      {select === 'stock_details' && <StockDetails searchKey={searchKey} />}
      {select === 'fundamentals' && <Fundamentals searchKey={searchKey} />}
      {select === 'analytics' && <Analytics searchKey={searchKey}/>}

      
              </div>
      <div className='about_stock'>
        <AboutStock searchKey={searchKey}/>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default LiveGraph;
