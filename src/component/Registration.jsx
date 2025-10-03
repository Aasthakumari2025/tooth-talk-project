import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className="register relative w-full h-screen ">
      {/* rings in bg*/}


      <div className="w-[50%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      <div className="w-[47%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      <div className="w-[44%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      <div className="w-[41%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      <div className="w-[38%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>

      {/* registration form */}
      <div className="w-[70%]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 z-10 ">
        <div className='text-center'>
          <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold text-[#843E71]'>Register now</h1>
          <p className='text-[18px]'>to be a part of the event</p>
          <h3 className='text-[20px] md:text-[28px] font-semibold'>Fill the information carefully</h3>
        </div>

        <div className="form w-[90%] py-5">
          <h1 className='text-[#843E71] text-[28px]'>Personal Information</h1>
          <div>

            <div className="mb-5">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name *</label>
              <input type="text" id="first_name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your first name" required />
            </div>

            <div className="mb-5">
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name *</label>
              <input type="text" id="last_name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your last name" required />
            </div>

            <div className="mb-5">
              <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">IT Registration Code</label>
              <input type="text" id="code" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter registration code" required />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address*</label>
              <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your email" required />
            </div>

            <div className="mb-5">
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile number*</label>
              <input type="text" id="number" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter mobile number" required />
            </div>

            <div className='w-full flex justify-center'>
              <Link to={'/Meetup'} type="submit" className="text-white   bg-[#843E71] hover:bg-[#843E71]/9 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</Link>

            </div>



          </div>
        </div>
      </div>



    </div>



  )
}

export default Registration