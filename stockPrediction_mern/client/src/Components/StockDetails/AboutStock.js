import React, { useState, useEffect } from 'react';
import './AboutStock.css';

const API_KEY = 'CXXUC872EBB3EYOU';

function AboutStock({ searchKey }) {
  console.log("Symbol received in AboutStock:", { searchKey });
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    if (searchKey) {
      const fetchOverview = async () => {
        try {
          const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchKey}&apikey=${API_KEY}`);
          const result = await response.json();
          setOverview(result);
        } catch (error) {
          console.log('Error fetching overview', error);
        }
      };
      fetchOverview();
    }
  }, [searchKey]);

  return (
    <div className="about_section">
      <h1>Overview</h1>
      <div className="about_container">
        <div className="label">
          <b>Symbol:</b>
          <p>{overview ? overview['Symbol'] || 'N/A' : 'Loading...'}</p>
        </div>
        <div className="label">
          <b>Name:</b>
          <p>{overview ? overview['Name'] || 'N/A' : 'Loading...'}</p>
        </div>
        <div className="label">
          <b>Asset Type:</b>
          <p>{overview ? overview['AssetType'] || 'N/A' : 'Loading...'}</p>
        </div>
        <div className="label">
          <b>Description:</b>
          <p>{overview ? overview['Description'] || 'N/A' : 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutStock;
