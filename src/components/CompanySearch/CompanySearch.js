import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CompanyList from '../CompanyList/CompanyList'

const CompanySearch = (props) => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [company, setCompany] = useState('');

  useEffect(() => {
    if (value) {
      getClearbit(value)
    } else {
      setList([]);
    }
  }, [value])

  const getClearbit = (val) => {
    return axios({
      method: 'get',
      url: `https://autocomplete.clearbit.com/v1/companies/suggest?query=${val}`,
    })
      .then(res => {
        setList(res.data);
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const selectCompany = (e) => {
    setCompany(e.target.value)
  }

  return (
    <div>
      <label htmlFor="company_name" className="company_name">Company</label>
      <input
        type="text"
        name="company_name"
        id="company_name"
        placeholder="Apple"
        key={`company_name:${company || company}`}
        defaultValue={company ? company : value}
        onChange={handleChange}
      />
      <CompanyList companies={list} selectCompany={selectCompany} />
    </div>
  )
}

export default CompanySearch