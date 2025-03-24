import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import heroimg from '../assets/images/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
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
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
        <section
          id='hero'
          className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20'
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos='zoom-in'
            className='text-5xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]'
          >
            Tu nuevo hogar te espera
          </h1>
          <p
            data-aos='zoom-in'
            className='text-white text-xl lg:pr-[500px] pr-0'
          >
            Explora nuestra amplia variedad de propiedades diseñadas para ajustarse a tu estilo de vida. Te ayudamos a encontrar el lugar perfecto para ti.
          </p>
        </section>
      </div>

      <div className={`${darkMode ? 'dark bg-black' : 'light-bg-transparent'} z-10`}>
        <div data-aos='zoom-in' id='form' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>

          <div className='w-full'>
            <label htmlFor='ubicacion' className='text-black dark:text-white font-semibold uppercase'>
              Ubicación
            </label>
            <input
              id='ubicacion'
              name='ubicacion'
              type='text'
              placeholder='Ingresa comuna o ciudad'
              className='bg-white dark:bg-gray-700 dark:text-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]'
            />
          </div>

          <div className='w-full'>
            <label htmlFor='tipo' className='text-black dark:text-white font-semibold uppercase'>
              Tipo
            </label>
            <select
              id='tipo'
              name='tipo'
              className='bg-white dark:bg-gray-700 dark:text-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'
              defaultValue=''
            >
              <option value='' disabled>
                Selecciona
              </option>
              <option value='venta'>Venta</option>
              <option value='arriendo'>Arriendo</option>
              <option value='oficinas'>Oficinas</option>
            </select>
          </div>

          <div className='w-full'>
            <label htmlFor='categoria' className='text-black dark:text-white font-semibold uppercase'>
              Categoría
            </label>
            <select
              id='categoria'
              name='categoria'
              className='bg-white dark:bg-gray-700 dark:text-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'
              defaultValue=''
            >
              <option value='' disabled>
                Selecciona
              </option>
              <option value='departamentos'>Departamentos</option>
              <option value='duplex'>Duplex</option>
              <option value='casas'>Casas</option>
            </select>
          </div>

          <div className='w-full'>
            <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300'>Enviar</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default Hero
