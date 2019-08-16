import React from 'react';
import './Company.css'

const Company = ({ name, logo }) => {
  return <label> <div className="company_select">
  <input type="radio" name="company" value={name} />
   
   <img src={logo} alt={`${name} logo`} />
     {name}
   
     </div>
    </label>
}

export default Company;