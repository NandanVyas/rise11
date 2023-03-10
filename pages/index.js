import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Booking from '../components/Booking'
import Footer from '../components/Footer';

const Home = () => 
{
  const [selectedOption, setSelectedOption] = useState('RoundTrip');
  return (
  <div className='md:h-screen overflow-scroll '>
    <NavBar/>
    <form className='flex justify-center items-center  my-4 text-xs'>
    <div className="flex items-center border-b-2 px-4 pb-3 ">
        <input
          type="checkbox"
          className="appearance-none border-2 border-solid border-black/20 h-4 w-4 rounded-full checked:bg-purple-500 checked:border-green-400/70 "
          id="RoundTrip"
          checked={selectedOption === 'RoundTrip'}
          onChange={() => setSelectedOption('RoundTrip')}
        />
        <label className="ml-3" htmlFor="RoundTrip">
        Round Trip
        </label>
      </div>
      <div className="flex items-center border-b-2 px-4 pb-3">
        <input
          type="checkbox"
          className="appearance-none border-2 border-solid border-black/20 h-4 w-4 rounded-full checked:bg-purple-500 checked:border-green-400/70"
          id="oneWay"
          checked={selectedOption === 'oneWay'}
          onChange={() => setSelectedOption('oneWay')}
        />
        <label className="ml-3" htmlFor="oneWay">
          One Way
        </label>
      </div>
      <div className="flex items-center border-b-2 px-4 pb-3">
        <input
          type="checkbox"
          className="appearance-none border-2 border-solid border-black/20 h-4 w-4 rounded-full checked:bg-purple-500 checked:border-green-400/70"
          id="MultiCity"
          checked={selectedOption === 'MultiCity'}
          onChange={() => setSelectedOption('MultiCity')}
        />
        <label className="ml-3" htmlFor="MultiCity">
        Multi City
        </label>
      </div>
    </form>

    <Booking/>

    <Footer/>
  </div>
  )
}

export default Home