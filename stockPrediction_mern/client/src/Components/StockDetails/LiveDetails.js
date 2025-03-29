import React, { useState, useEffect } from 'react';
import './LiveDetails.css';

const API_KEY = 'SEE3YJFZ6YED5AN1';
const FUNCTION = 'GLOBAL_QUOTE';

function LiveDetails({ searchKey }) {
  const [livedetails, setLiveDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const livedata = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${searchKey}&apikey=${API_KEY}`);
        const data = await response.json();
        setLiveDetails(data['Global Quote'] || {}); // Accessing 'Global Quote' from the response
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (searchKey) {
      livedata();
    }
  }, [searchKey]);

  if (loading) {
    return <div className="loading-text">Loading...</div>;
  }

  return (
    <div className="live_details">
      <p><b>Symbol:</b></p> 
      <p className="text-success">{livedetails['01. symbol'] || 'N/A'}</p>
      <p><b>Price:</b></p> 
      <p className="text-success">{livedetails['05. price'] || 'N/A'}</p>
    </div>
  );
}

export default LiveDetails;
