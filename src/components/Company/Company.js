import React from 'react';
import './Company.css'

const Company = ({ name, logo, selectCompany, getLogo }) => {
  const handleChange = (e) => {
    selectCompany(e);
    getLogo(logo);
  }

  return <label> 
    <div className="company_select">
      <input type="radio" name="company" value={name} onChange={handleChange} />
      <img src={logo || 'https://via.placeholder.com/150'} alt={`${name} logo`} />
      {name}
      </div>
    </label>
}

export default Company;