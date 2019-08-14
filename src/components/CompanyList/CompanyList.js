import React from 'react';
import Company from '../Company/Company'
import './CompanyList.css'

const CompanyList = (props) => {
  console.log(props.companies);
  return (

    <div className="company_list" >
      {props.companies.map(company => {
        return <Company key={company.name} name={company.name} logo={company.logo} />
      })}
    </div>

  )
}

export default CompanyList