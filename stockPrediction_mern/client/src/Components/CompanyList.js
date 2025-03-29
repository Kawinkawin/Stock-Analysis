import React from "react";

function CompanyList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div id="card-container" className="scrolling-wrapper">
            {/* Card 1 */}
            <div className="card" data-symbol="TATAMOTORS" id="card1">
              <img
                src="https://static.brandirectory.com/logos/tats001_tata.jpg"
                className="card-img-top"
                alt="Tata Motors"
              />
              <div className="card-body">
                <p className="card-text text-center font-weight-bold mt-3">
                  Tata Motors
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card" data-symbol="AAPL" id="card2">
              <img
                src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg"
                className="card-img-top"
                alt="Apple"
              />
              <div className="card-body">
                <p className="card-text text-center font-weight-bold mt-3">
                  Apple
                </p>
              </div>
            </div>
            {/* Repeat for other cards */}
            {/* Card 3 */}
            <div className="card" data-symbol="TSLA" id="card3">
              <img
                src="https://media.designrush.com/inspirations/269904/conversions/1.Tesla-Logo-Design-preview.jpg"
                className="card-img-top"
                alt="Tesla"
              />
              <div className="card-body">
                <p className="card-text text-center font-weight-bold mt-3">
                  Tesla
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card" data-symbol="IBM" id="card4">
              <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122015/untitled-1_84.png?itok=6yX4oOLu"
                className="card-img-top"
                alt="IBM"
              />
              <div className="card-body">
                <p className="card-text text-center font-weight-bold mt-3">
                  IBM
                </p>
              </div>
            </div>
            {/* Repeat for more cards */}
            {/* Card 5 */}
            <div className="card" data-symbol="TCS" id="card5">
              <img
                src="https://www.siegelgale.com/app/uploads/2021/10/SGCOM_Blog_211018.png"
                className="card-img-top"
                alt="TCS"
              />
              <div className="card-body">
                <p className="card-text text-center font-weight-bold mt-3">
                  TCS
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="card">
              <img src="image_url_6.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center font-weight-bold mt-3">
                  Text 6
                </p>
              </div>
            </div>
            {/* Repeat for more cards */}
            {/* Card 7 */}
            <div className="card">
              <img src="image_url_7.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Text 7</p>
              </div>
            </div>
            {/* Card 8 */}
            <div className="card">
              <img src="image_url_8.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Text 8</p>
              </div>
            </div>
            {/* Repeat for more cards */}
            {/* Card 9 */}
            <div className="card">
              <img src="image_url_9.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Text 9</p>
              </div>
            </div>
            {/* Card 10 */}
            <div className="card">
              <img src="image_url_10.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Text 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
const styles = `
  .scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }

  .card {
    display: inline-block;
    width: 250px; /* Adjust the width of each card */
    height: 320px; /* Adjust the height of each card */
    margin-right: 10px; /* Adjust margin between cards */
    border-width: 3px;
  }

  .card img {
    height: 200px; /* Adjust the height of the image */
    object-fit: cover; /* Preserve aspect ratio while filling the element */
  }

  .card:hover {
    transform: scale(0.95); /* Increase size on hover */
    box-shadow: 0 0 20px rgba(0, 200, 255, 0.796); /* Add shadow effect */
  }
`;

// Apply styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);