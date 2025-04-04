import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { property } from '../context/export'
import { FaBath, FaShareAlt, FaUserCircle, FaHeart, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Properties = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  }, [])

  const { darkMode } = useDarkMode()

  return (
    <>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
        <section id='properties' className='lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h2 data-aos='zoom-in' className='text-red-500 dark:text-white uppercase font-semibold'>Propiedades</h2>
            <h3 data-aos='zoom-in' data-aos-delay='200' className='text-black text-[28px] md:text-[32px] lg:text-[35px] font-semibold leading-10 dark:text-white'>Descubre lo último</h3>
          </div>

          <div id='grid-box' className='w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
            {
              property.map((item, index) => {
                // Ajuste dinámico del delay
                const delayFactor = window.innerWidth >= 1024 ? 100 : window.innerWidth >= 768 ? 150 : 200
                return (
                  <div data-aos='zoom-in' data-aos-delay={`${index * delayFactor}`} key={index} className='bg-white dark:bg-gray-800 rounded-xl w-full'>
                    <div
                      id='image-box'
                      className='bg-cover bg-center h-[250px] rounded-xl p-4 relative flex flex-col justify-between'
                      style={{ backgroundImage: `url(${item.images})` }}
                    >
                      <div id='top' className='flex justify-between items-end w-full'>
                        <div>
                          <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Detalles</button>
                        </div>

                        <div className='flex justify-between items-center gap-3'>
                          <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Vende</button>
                        </div>
                      </div>

                      <div id='bottom' className='absolute bottom-0 left-0 w-full p-4 flex justify-between items-center rounded-b-xl'>
                        <div className='flex justify-start items-center gap-2'>
                          <FaMapMarkerAlt className='size-4 text-white' />
                          <h3 className='text-white'>{item.address}</h3>
                        </div>

                        <div className='flex justify-center items-center gap-4'>
                          <FaVideo className='size-4 text-white' />
                          <FaCamera className='size-4 text-white' />
                        </div>
                      </div>
                    </div>

                    <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
                      <h3 className='text-xl text-black font-semibold dark:text-white'>{item.name}</h3>
                      <h4 className='text-2xl text-red-600 font-bold dark:text-white'>{item.price}</h4>
                      <p className='dark:text-white'>{item.about}</p>
                      <div id='icons' className='flex justify-center items-start gap-4'>
                        <div className='flex justify-center items-center gap-2'>
                          <FaBath className='size-5 text-red-400' />
                          <p className='dark:text-white'>{item.bath}</p>
                        </div>

                        <div className='flex justify-center items-center gap-2'>
                          <MdSpaceDashboard className='size-5 text-red-400' />
                          <p className='dark:text-white'>{item.area}</p>
                        </div>
                      </div>

                      <div className='w-full h-[1px] bg-gray-200 mt-8' />
                      <div id='owner-info' className='flex justify-between items-center w-full mt-2'>
                        <div className='flex justify-center items-center gap-2'>
                          <FaUserCircle className='size-5 text-red-400' />
                          <h3 className='dark:text-white'>{item.owner}</h3>
                        </div>

                        <div className='flex justify-center items-center gap-4'>
                          <div className='p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                            <FaShareAlt className='size-4 text-red-400' />
                          </div>

                          <div className='p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                            <FaHeart className='size-4 text-red-400' />
                          </div>

                          <div className='p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                            <FaPlus className='size-4 text-red-400' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Properties
