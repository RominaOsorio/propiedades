import { services } from '../context/export'
import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
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

      <div id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full`}>
        <section
          id='services'
          className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-10 px-6 py-20 gap-10`}
        >
          <div className='flex flex-col justify-center items-start gap-4'>
            <h2 data-aos='zoom-in' className='text-red-500 dark:text-white uppercase font-semibold'>Servicios</h2>
            <h3 data-aos='zoom-in' className='text-black text-[28px] md:text-[32px] lg:text-[35px] font-semibold leading-10 dark:text-white'>
              Soluciones diseñadas para ti
            </h3>
          </div>

          <div id='service-box' className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-8'>
            {
              services.map((item, index) => (
                <div
                  data-aos='zoom-in'
                  data-aos-delay='200'
                  key={index}
                  className='bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer'
                >
                  <div className='p-6 rounded-full bg-red-200'>
                    <item.icon className='text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                  </div>
                  <h2 className='text-black text-[22px] font-semibold dark:text-white'>{item.title}</h2>
                  <p className='text-lg text-slate-700 dark:text-white'>{item.desc}</p>
                  <button className='border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white'>Ver más</button>
                </div>
              ))
            }
          </div>
        </section>
      </div>

    </>
  )
}

export default Services
