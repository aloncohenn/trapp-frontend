import React from 'react';

const Company = ({ name, logo }) => {
  return <div>
    <input type="radio" name="company" value={name} /><p>{name}</p>
    <img src={logo} alt={`${name} logo`} />

  </div>
}

export default Company;