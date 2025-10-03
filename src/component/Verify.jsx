import React from 'react'
import { Link } from 'react-router-dom'

const Verify = () => {
  return (
   <div className="register relative w-full h-screen ">
      {/* rings in bg*/}


      <div className="w-[50%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      <div className="w-[47%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      <div className="w-[44%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      <div className="w-[41%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      <div className="w-[38%] aspect-[1/1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>

      {/* registration form */}
      <div className="md:w-[70%] w-full   absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 z-10 ">
        <div className='text-center'>
          <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold text-[#843E71]'>Register now</h1>
          <p className='text-[18px]'>to be a part of the event</p>
          <h3 className='text-[20px] md:text-[28px] font-semibold'>Fill the information carefully</h3>
        </div>

        <div className="form w-[600px] m-auto py-5">
          <h1 className='text-[#843E71] text-[24px] font-semibold'>Verify it's you</h1>
          <h1>Enter verification code</h1>

          <form className="">
    <div className="flex mb-2 mt-[20px] gap-2 md:justify-around  rtl:space-x-reverse">
        <div>
            <label htmlFor="code-1" className="sr-only">First code</label>
            <input type="text" maxLength="1" data-focus-input-init data-focus-input-next="code-2" id="code-1" className="block md:w-[60px] w-8 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label htmlFor="code-2" className="sr-only">Second code</label>
            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2" className="block md:w-[60px] w-8 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label htmlFor="code-3" className="sr-only">Third code</label>
            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3" className="block md:w-[60px] w-8 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label htmlFor="code-4" className="sr-only">Fourth code</label>
            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4" className="block md:w-[60px] w-8 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label htmlFor="code-5" className="sr-only">Fifth code</label>
            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-4" data-focus-input-next="code-6" id="code-5" className="block md:w-[60px] w-8 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label htmlFor="code-6" className="sr-only">Sixth code</label>
            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6" className="block md:w-[60px] w-8 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label htmlFor="code-6" className="sr-only">Sixth code</label>
            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6" className="block md:w-[60px] w-8 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label htmlFor="code-6" className="sr-only">Sixth code</label>
            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6" className="block md:w-[60px] w-8 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
    </div>
    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 flex  md:justify-center dark:text-gray-400">A verification code has been sent to your mobile number and email</p>

     <div className='w-full mt-4 flex justify-center'>
              <button type="submit" className="text-white   bg-[#843E71] hover:bg-[#843E71]/9 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>

            </div>
</form>
         



         
        </div>
      </div>



    </div>

  )
}

export default Verify