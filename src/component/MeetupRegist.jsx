import React from 'react'
import { Link } from 'react-router-dom'

const MeetupRegist = () => {
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
          <h1 className='text-[#843E71] text-[28px]'>Chamber Information</h1>
          <div>

            <div className="mb-5">
              <label htmlFor="Dist-Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current District Address</label>
              <input type="text" id="Dist-Address" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter district" required />
            </div>

            <div className="mb-5">
              <label htmlFor="current-Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Address  *</label>
              <input type="text" id="current-Address" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your address" required />
            </div>

            <div className="mb-5">
              <label htmlFor="chamber-district" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Chamber District</label>
              <input type="text" id="chamber-district" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Select destrict" required />
            </div>

            <div className="mb-5">
              <label htmlFor="chamber-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Chamber Address  *</label>
              <input type="text" id="chamber-address" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter chamber address" required />
            </div>

            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institution Name  *</label>
              
              <input type="text" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Institution Name " required />
            </div>

            <div className='w-full flex justify-center'>
              <Link to={'/verify'} type="submit" className="text-white   bg-[#843E71] hover:bg-[#843E71]/9 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</Link>

            </div>



          </div>
        </div>
      </div>



    </div>

  )
}

export default MeetupRegist