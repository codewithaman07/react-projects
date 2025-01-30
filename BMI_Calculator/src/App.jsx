import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(' ');
  const [height, setHeight] = useState(' ');
  const [bmi, setbmi] = useState(null);
  const [message, setMessage] = useState('');
  const calculateBMI = () =>{
    if(!weight || !height || weight<=0 || height<=0){
      setMessage("Please enter valid values :) ")
      setbmi(null)
    }
    const heightInMeter = height/100;
    const bmival = (weight/ (heightInMeter*heightInMeter)).toFixed(2);
    setbmi(bmival);

    if(bmival < 18.5) setMessage("Underweight khana khale bhyii");
    else if(bmival < 25) setMessage("Normal weight");
    else if (bmival < 30) setMessage("Overweight");
    else setMessage("Obese");

  };

  return (
    <>
      <div className="container flex items-center justify-center min-h-screen bg-black">
        <div className="bg-white p-12 rounded-xl  w-96 md:w-[400px] lg:w-[450px]">
          <h1 className='font-bold text-black text-center text-2xl'>BMI Calculator</h1>
          <div className='flex flex-col mb-4'>
            <label htmlFor="weight" className='block text-left font-medium text-gray-700 mb-1 mt-2'>Weight (Kg)</label>
            <input  
              type='number'
              id='weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="height" className='block text-left font-medium text-gray-700 mb-1'>Height (cm)</label>
            <input  
              type='number'
              id='height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <button 
            onClick={calculateBMI}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2'
          >Calculate BMI</button>

          {bmi && (
            <div className="mt-4 text-center">
             <p className="text-lg font-bold">Your BMI: {bmi}</p>
             <p className="text-sm text-gray-700">{message}</p>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default App
