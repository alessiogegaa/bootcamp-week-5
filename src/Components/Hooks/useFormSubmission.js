import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useFormSubmission = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useLocalStorage('formData', {
    name: '',
    surname: '',
    age: '',
    gender: '',
    company: '',
    companyCode: '',
  });
  const [formStep, setFormStep, removeStep] = useLocalStorage('formStep', {
    formStep: '',
  })
  useEffect(() => {
    //const savedStep = localStorage.getItem('formStep');
    if (formStep) {
      setStep(JSON.parse(formStep));
    }
  }, []);

  useEffect(() => {
    // localStorage.setItem('formStep', JSON.stringify(step));
    setFormStep(step);
  }, [step]);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (input, value) => {
    const updatedFormData = { ...formData, [input]: value };
    setFormData(updatedFormData); 
  };

  const handleSubmit = () => {
    console.log('Data submitted:', formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      surname: '',
      age: '',
      gender: '',
      company: '',
      companyCode: '',
    });
    setStep(1);
    removeStep('formStep');
  };

  return {
    step,
    formData,
    nextStep,
    prevStep,
    handleChange,
    handleSubmit,
  };
};

export default useFormSubmission;
