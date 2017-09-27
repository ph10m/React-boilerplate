import React, { Component } from 'react';
// import PropTypes from 'prop-types'; // ES6

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'React',
  lastName: 'Boilerplate'
};

class Home extends Component{
  render() {
    return (
      <div>
        <h1>{formatName(user)}!</h1>
        <h2>(With SCSS!)</h2>
      </div>
    )
  }
}

export default Home;
