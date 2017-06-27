import React from 'react';
import { Link } from 'react-router-dom'

export const Navigation = () => (
  <div className="navigation">
    <ul className="nav">
    	<li><Link to="/Rabbit-Hunter-Redux/dist/">Home</Link></li>
    	<li><Link to="/Rabbit-Hunter-Redux/dist/about">Hunters</Link></li>
    </ul>
  </div>
);