import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { FaStar } from 'react-icons/fa'
import { client } from '../context/export'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Clients = () => {
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
        <section id='testimonials' className='lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20'>
          <div className='flex flex-col jus items-start gap-4'>
            <h2 data-aos='zoom-in' className='text-red-500 dark:text-white uppercase font-semibold'>Nuestros clientes</h2>
            <h3 data-aos='zoom-in' data-aos-delay='200' className='text-black text-[28px] md:text-[35px] font-semibold leading-10 mt-4 dark:text-white'>
              Expertos en hacer realidad tus necesidades
            </h3>
          </div>

          <div id='clientes-box' className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-8 w-full'>
            {
              client.map((item, index) => (
                <div
                  data-aos='zoom-in'
                  data-aos-delay='200'
                  key={index}
                  className='bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full'
                >
                  <div className='flex justify-start items-center w-full gap-4'>
                    <img src={item.image} alt='' className='w-[70px] transform hover:scale-110 transition-transform duration-300' />
                    <div className='flex flex-col justify-center items-start gap-1'>
                      <h2 className='text-xl text-black font-semibold dark:text-white'>{item.name}</h2>
                      <h3 className='text-slate-600 dark:text-white'>{item.text}</h3>
                    </div>
                  </div>
                  <p className='text-md text-justify text-slate-600 dark:text-white'>{item.feedback}</p>
                  <div className='flex justify-start items-start gap-2 w-full'>
                    <FaStar className='size-4 text-yellow-400' />
                    <FaStar className='size-4 text-yellow-400' />
                    <FaStar className='size-4 text-yellow-400' />
                    <FaStar className='size-4 text-yellow-400' />
                    <FaStar className='size-4 text-yellow-400' />
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Clients

// className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}
