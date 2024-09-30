import React, { useState } from 'react';

function ImbCal() {
  
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');
  const [idealWeightRange, setIdealWeightRange] = useState('');

   
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;  
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);  
      setBmi(bmiValue);
      
       
      if (bmiValue < 18.5) {
        setBmiStatus('underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBmiStatus('normal');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiStatus('overweight');
      } else if (bmiValue >= 30 && bmiValue < 35) {
        setBmiStatus('obese');
      } else if (bmiValue >= 35) {
        setBmiStatus('extreme-obesity');
      }

      
      const minIdealWeight = (18.5 * (heightInMeters * heightInMeters)).toFixed(2);
      const maxIdealWeight = (24.9 * (heightInMeters * heightInMeters)).toFixed(2);
      setIdealWeightRange(`${minIdealWeight}kg - ${maxIdealWeight}kg`);
    }
  };

   
  const getImage = () => {
    switch (bmiStatus) {
      case 'underweight':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjF8w68Gb3bsz7I2jbrgCQe13AD3RLoEP-0G-TPFb2p7ZVK2s2';
      case 'normal':
        return 'https://www.erela.co.id/build/web/assets/bmi-normal.4d3431ab.png';
      case 'overweight':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9LPhSw2zlyN5vBl3b4gW2Cs_eVRWkVOlrZelfpEJ8oYxdFXP';
      case 'obese':
        return 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnLiuElTripmtr7a19YO8QOLhsAV0wikPMieqfNT2yL18qmjUU';
      case 'extreme-obesity':
        return 'https://drnutrition.com/themes/storefront/public/images/bmi-shape/05.png';
      default:
        return '';
    }
  };

  return (
    <div>
      <div className='text-center font-bold pt-32'><h5>Weight (kg):</h5></div>
      <div className='flex justify-center pt-4'>
        <input 
          type="text" 
          placeholder="Enter your weight" 
          className="input input-bordered w-full max-w-xs" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)}  
        />
      </div>

      <div className='text-center font-bold pt-7'><h5>Height (cm):</h5></div>
      <div className='flex justify-center pt-4'>
        <input 
          type="text" 
          placeholder="Enter your height" 
          className="input input-bordered w-full max-w-xs" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className='text-center pt-7'>
        <button className='btn' onClick={calculateBMI}>Calculate BMI</button>
      </div>

      {bmi && (
        <div className='text-center font-bold pt-7'>
          <h5>Your BMI is: {bmi}</h5>
          <h6>Ideal Weight Range: {idealWeightRange}</h6>
          {bmiStatus && (
            <div className='pt-4'>
              <img src={getImage()} alt="BMI status" className="mx-auto" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImbCal;
