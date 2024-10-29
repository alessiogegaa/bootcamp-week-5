import React from 'react';

const Step1 = ({data, handleChange}) => {
  return (
    <div className="form-step">
      <label>Name</label>
      <input type='text' placeholder='Enter name' value={data.name} onChange={(e)=>{
        handleChange('name', e.target.value);
      }}/>
      <label>Surname</label>
      <input type='text' placeholder='Enter surname' value={data.surname} onChange={(e)=>{
        handleChange('surname', e.target.value);
      }}/>
    </div>
  );
};

export default Step1;
