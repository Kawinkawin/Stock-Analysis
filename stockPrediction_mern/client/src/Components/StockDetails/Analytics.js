import React,{useState,useEffect} from 'react'
const API_KEY = '5YH2NY3GUP1EQIIM'
const FUNCTION='OVERVIEW'
const Analytics = ({searchKey}) => {
  const[analyst,setAnalyst]=useState({})
  useEffect(()=>{
    const AnalystData=async()=>{
      try{
        const response=await fetch(`https://www.alphavantage.co/query?function=${FUNCTION}&symbol=IBM&apikey=${API_KEY}`)
        const result=await response.json()
        setAnalyst(result)
      }
      catch(error){
        console.error(error)
      }
    };
    AnalystData();
  },[searchKey])
  return (
    <div className='stock-details-container'>
      <h2><b>Analyst Rating</b></h2>
        <div className='form-container'>
        <div className="form-group">
          <div className='box'>
            <b>Strong Buy:{analyst['AnalystRatingStrongBuy']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>Buy:{analyst['AnalystRatingBuy']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>Hold:{analyst['AnalystRatingHold']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>Sell:{analyst['AnalystRatingSell']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>Strong Sell:{analyst['AnalystRatingStrongSell']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>Analyst Target Price:{analyst['AnalystTargetPrice']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>52-Weeks High:{analyst['52WeekHigh']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>52-Weeks Low:{analyst['52WeekLow']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>50 Day M.A:{analyst['50DayMovingAverage']}</b>
          </div>
        </div>
        <div className="form-group">
          <div className='box'>
            <b>200 Day M.A:{analyst['200DayMovingAverage']}</b>
          </div>
        </div>
     
        
        </div>
    </div>
  )
}

export default Analytics