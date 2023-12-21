
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Heading() {
  const [search, setSearch] = useState('');

  return (
    <div className="navbar">
      <Link to="/">
        <h3 className='kalvium'>Kalvium Books</h3>
      </Link>
      <ul>
        <li>
          <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
            <span>Games</span>
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
            <span>Apps</span>
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/movies" target="_blank" rel="noopener noreferrer">
            <span>Movies</span>
          </a>
        </li>
        <li>
          <Link to="/Registration">
            <button className="button">
              <span>Register</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Heading;


