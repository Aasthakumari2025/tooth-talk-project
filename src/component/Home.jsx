import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import image1 from '../assets/Logo5.png';
import image2 from '../assets/Logo 3.png';
import image3 from '../assets/Logo 6.png';
import image4 from '../assets/Logo 12.png';
import image5 from '../assets/Logo8.png';
import image6 from '../assets/Logo 8.png';
import image7 from '../assets/Logo 10.png';
import image8 from '../assets/Logo8.png';
import image9 from '../assets/Logo 7.png';
import image10 from '../assets/Logo 5.png';


const Home = () => {
  const images = [
    image1, image2, image3, image4, image5, image6 // or use imported image if it's in src/assets
  ];

  const images2 = [
    image7, image8, image9, image10 // or use imported image if it's in src/assets
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 lg:px-[72px] py-12 lg:py-16">


        <div className="flex flex-col lg:flex-row items-center gap-8 px-6 lg:gap-12 w-full mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}

            className="flex-1 lg:max-w-[743px] text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[76px] font-bold leading-tight lg:leading-[76px] mb-4">
              <span className="text-[#843E71]">Tooth Talk:</span>
              <br className="hidden sm:block" />
              <span className="text-gray-dark">
                A Casual Meetup for Dental Professionals
              </span>
            </h1>

            <p className="text-base lg:text-lg text-black mb-6 lg:mb-8 font-medium max-w-md mx-auto lg:mx-0">
              Please register to be a part of the event.
            </p>

            <Link to={'/register'}
              size="lg"
              className="transform px-8 lg:px-11 py-4 lg:py-[18px] text-base lg:text-lg font-normal transition-transform duration-500 hover:scale-125 bg-[#843E71] hover:bg-[#843E71]/90 text-white rounded-md"

            >
              Register Now
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}

            className="flex-1 flex justify-center lg:justify-end order-first lg:order-last">
            <motion.img


              src="https://api.builder.io/api/v1/image/assets/TEMP/9cdd6db4ca7d11c7cb715baab039e88e133f0032?width=1085"
              alt="Dental Professional"
              className="w-full  max-w-[500px] lg:max-w-[642px] h-auto transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative px-6 lg:px-[72px] py-[10px] lg:py-[20px]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-medium mb-8 lg:mb-16 leading-tight">
            Our Partner in<br />Promoting Oral Health
          </h2>



          {/* Partner Logos */}

          <div className=''>
            {/* row 1 */}
            <div className='flex w-[100%] justify-center'>
              {images.map((img, index) => (
                <img key={index} className="opacity-50 hover:opacity-100 transition-opacity duration-300 hover:scale-110" src={img} alt={`Image ${index + 1}`} />
              ))}
            </div>

            {/* row 2 */}
            <div className='flex w-[100%] justify-center'>
              {images2.map((img, index) => (
                <img key={index} className="opacity-50 hover:opacity-100 transition-opacity duration-300  hover:scale-110" src={img} alt={`Image ${index + 1}`} />
              ))}


            </div>
          </div>




        </div>
      </section>
    </>
  )
}

export default Home
