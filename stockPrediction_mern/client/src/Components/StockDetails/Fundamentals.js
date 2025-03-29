import React, { useState, useEffect } from 'react';
import './StockDetails.css';

const API_KEY = 'I0NNFCUT9U7VB86U';
const FUNCTION = 'OVERVIEW';

const Fundamentals = ({ searchKey }) => {
  const [fundamentals, setFundamentals] = useState({});

  useEffect(() => {
    const fetchFundamentals = async () => {
      try {
        const response = await fetch(`https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${searchKey}&apikey=${API_KEY}`);
        const result = await response.json();
        setFundamentals(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    
      fetchFundamentals();
    
  }, [searchKey]);

  return (
    <div className='stock-details-container'>
      <h2><b>Valuation Metrics</b></h2>
      <div className='form-container'>
        <div className="form-group">
          <div className='box'>
            <b>Market Cap:</b> {fundamentals['MarketCapitalization']||'No Data Found'}
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>PE Ratio:</b> {fundamentals['PERatio']||'No Data Found'}
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>PB Ratio:</b> {fundamentals['PriceToBookRatio']||'No Data Found'}
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>Book Value:</b> {fundamentals['BookValue']||'No Data Found'}
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>EPS:</b> {fundamentals['EPS']||'No Data Found'}
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>ROE:</b> {fundamentals['ReturnOnEquityTTM']||'No Data Found'}
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>Div. Yield:</b> {fundamentals['DividendYield']||'No Data Found'}
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>D. Per Share:</b> {fundamentals['DividendPerShare']||'No Data Found'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
