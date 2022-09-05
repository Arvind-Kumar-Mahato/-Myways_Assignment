import React from 'react'
import "./Index.css";
const Index = () => {
  return (
    <div>
      <div className="container">
        <div className="box_container">
          New York City, United State As of 04:37 EDT
        </div>

        <div className="box">
          <div>
            <h1>21°C</h1>
            <h1>Clear</h1>
            <h1>Day 30°C . Night 20°</h1>
          </div>
          <div className="forcast">
            <h3>Today's Forecast for New York City, NY, United States </h3>
            <div className="main-for">
              <div className="box1">
                <div>Morning</div>
                <div>25°C</div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2698/2698194.png"
                  alt="sun"
                />
                <div>0%</div>
              </div>

              <div className="box2">
                <div>Afternoon</div>
                <div>30°C</div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2698/2698213.png"
                  alt="cloud"
                />
                <div>5%</div>
              </div>

              <div className="box3">
                <div>Evening</div>
                <div>25°C</div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2387/2387930.png"
                  alt="moon cloud"
                />
                <div>0%</div>
              </div>

              <div className="box4">
                <div>Overnight</div>
                <div>20°C</div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/658/658140.png"
                  alt="over night moon"
                />
                <div>0%</div>
              </div>
            </div>
            <button className='btn'>Next Hours</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index
