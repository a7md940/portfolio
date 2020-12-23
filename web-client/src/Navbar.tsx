import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = (props: any) => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects/create">
            Create Project
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;