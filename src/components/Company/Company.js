import React from 'react';

const Company = ({name, logo}) => {
  return <div>
    <p>{name}</p>
    <img src={logo} alt={`${name} logo`} />
    <input type="radio" name="company" value={name} />
  </div>
}

export default Company;