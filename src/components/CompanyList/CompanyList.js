import React from 'react';
import Company from '../Company/Company'
import './CompanyList.css'

const CompanyList = (props) => {
  return props.companies.map(company => {
    return <Company key={company.name} name={company.name} logo={company.logo} />
  })
}

export default CompanyList