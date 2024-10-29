import React from 'react';
import Step1 from './Components/Step1/Step1';
import Step2 from './Components/Step2/Step2';
import Step3 from './Components/Step3/Step3';
import useFormSubmission from './Components/Hooks/useFormSubmission';

const App = () => {
  const {
    step,
    formData,
    nextStep,
    prevStep,
    handleChange,
    handleSubmit,
  } = useFormSubmission();

  return (
    <div className="form-container">
      <h2>Multi-Step Form</h2>
      {step === 1 && <Step1 data={formData} handleChange={handleChange} />}
      {step === 2 && <Step2 data={formData} handleChange={handleChange} />}
      {step === 3 && <Step3 data={formData} handleChange={handleChange} />}

      <div className="button-group">
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button type="submit" onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default App;
