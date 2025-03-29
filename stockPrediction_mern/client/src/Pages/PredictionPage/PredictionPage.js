import React, { useState } from "react";
import axios from "axios";
import "./PredictionPage.css";

function PredictionPage() {
  const [symbol, setSymbol] = useState("");
  const [days, setDays] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [futureGraphSrc, setFutureGraphSrc] = useState(null);
  const [comparisonGraphSrc, setComparisonGraphSrc] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    if (!symbol || !days || days <= 0) {
      setError("Please enter a valid stock symbol and number of days.");
      return;
    }
    setError(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        symbol,
        days: parseInt(days),
      });

      const { predictions, predictions_graph, actual_vs_predicted_graph } = response.data;

      // Set predictions and graphs
      setPredictions(predictions);
      setFutureGraphSrc(`data:image/png;base64,${predictions_graph}`);
      setComparisonGraphSrc(`data:image/png;base64,${actual_vs_predicted_graph}`);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || "Server Error");
      } else if (error.request) {
        setError("No response from server. Please check your connection.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="prediction-container">
      <h1 className="title">Stock Price Predictor</h1>
      <div className="input-section">
        <input
          type="text"
          className="symbol-input"
          placeholder="Enter stock symbol (e.g., AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          type="number"
          className="days-input"
          placeholder="Enter days to predict"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <button className="predict-button" onClick={handlePredict}>
          Predict
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {predictions.length > 0 && (
        <div className="predictions-list">
          <h2>Predicted Prices for the Next {days} Days:</h2>
          <ul>
            {predictions.map((price, index) => (
              <li key={index}>
                Day {index + 1}: ${price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {futureGraphSrc && (
        <div className="output-section">
          <h2>Future Predictions:</h2>
          <img src={futureGraphSrc} alt="Future Predictions Graph" className="prediction-image" />
        </div>
      )}

      {comparisonGraphSrc && (
        <div className="output-section">
          <h2>Actual vs Predicted:</h2>
          <img src={comparisonGraphSrc} alt="Actual vs Predicted Graph" className="comparison-image" />
        </div>
      )}
    </div>
  );
}

export default PredictionPage;

