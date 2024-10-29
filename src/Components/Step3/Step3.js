import React from 'react';

const Step3 = ({data,handleChange}) => {
  return (
    <div className="form-step">
      <label>Company</label>
      <input type='text' placeholder='Enter company' value={data.company} onChange={(e)=>{
        handleChange('company',e.target.value);
      }}/>
      <label>Company Code</label>
      <input type='text' placeholder='Enter company code' value={data.companyCode} onChange={(e)=>{
        handleChange('companyCode', e.target.value);
      }}/>
    </div>
  );
};

export default Step3;
