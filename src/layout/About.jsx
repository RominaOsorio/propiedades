import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import aboutimg from '../assets/images/about.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
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
      <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
        <div>
          <img data-aos='zoom-in' src={aboutimg} alt='about image' className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
        </div>

        <div className='flex flex-col justify-center items-start gap-8'>
          <h2 data-aos='zoom-in' className='text-red-500 dark:text-white uppercase font-semibold'>Quienes somos</h2>
          <h3 data-aos='zoom-in' data-aos-delay='200' className='text-black text-[35px] font-semibold leading-10 dark:text-white'>
            Ofrecemos asesoría para la compra y venta de propiedades.
          </h3>
          <p data-aos='zoom-in' data-aos-delay='400' className='text-xl text-gray-600 dark:text-white text-justify'>
            Nos dedicamos a conectar personas con espacios ideales. Te ayudamos a encontrar la propiedad que mejor se adapte a tus necesidades y estilo de vida.
          </p>
          <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg py-4 px-8 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300'>Ver más</button>
        </div>
      </section>
    </>
  )
}

export default About
