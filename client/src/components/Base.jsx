import { IndexLink, Link } from 'react-router';
import React, { PropTypes } from 'react';

import Navbar from './Navbar.jsx'

const Base = ({ children }) => (
  <div>
    <Navbar />
    <div className="row  center-lg">

      <div className="col-md-6 col-lg-6">
        <div className="box">
          {children}
        </div>
      </div>

    {/* /row */}
    </div>
  {/* /div root */}
  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
