import React from 'react';
import Company from '../Company/Company';
import './CompanyList.css';

const CompanyList = (props) => {
  return <div className="company"> {props.companies.map(company => {
    return  <Company key={company.name} name={company.name} logo={company.logo} />
  })}
  </div>
}

export default CompanyList;
