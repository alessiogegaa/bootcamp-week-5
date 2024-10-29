import React from 'react';

const Step2 = ({data, handleChange}) => {
  return (
    <div className="form-step">
      <label>Age</label>
      <input type='number' placeholder='Enter age' value={data.age} onChange={(e)=>{
        handleChange('age', e.target.value)
      }}/>
      <label>Gender</label>
      <select value={data.gender} onChange={(e)=>{
        handleChange('gender', e.target.value);
      }}>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
  );
};

export default Step2;
