// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Homepage.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        <ul style={{ fontSize: 'large' }}>
          <li><a href="index.html"><strong>Home</strong></a></li>
          <li><a href="Dashboard.html"><strong>Dashboard</strong></a></li>
          <li><a href="contactindex2.html"><strong>Contact</strong></a></li>
          <li><a href="About Usindex.html"><strong>About Us</strong></a></li>
        </ul>
      </nav>
      <div className="center-container">
        <div className="profile">
          <img src="https://img.freepik.com/free-vector/flat-design-vintage-motorcycle-illustration_23-2149449496.jpg?w=996" alt="Profile 1" />
          <div>
            <h2>2 Wheeler</h2>
          </div>
        </div>
        <div className="profile">
          <img src="https://img.freepik.com/free-vector/family-car_23-2147492087.jpg?w=740" alt="Profile 2" />
          <div>
            <h2>4 Wheeler</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
