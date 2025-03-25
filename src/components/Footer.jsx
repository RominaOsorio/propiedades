import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode()
  return (
    <>
      <footer className={`${darkMode ? 'dark: bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h2 className='text-white text-2xl font-semibold'>Sobre Nosotros</h2>
          <p className='text-slate-200 text-justify'>Somos una empresa dedicada a ofrecer las mejores propiedades en el mercado, brindando asesoría personalizada y soluciones a medida para cada cliente.</p>
          <div id='social-icons' className='flex justify-self-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaFacebook className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='size-5' />
            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='size-5' />
            </div>

          </div>

        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h2 className='text-white text-2xl font-semibold'>Contáctanos</h2>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-5' />
            <p className='text-slate-200'>Av. Principal 1234, Santiago, Chile</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5' />
            <p className='text-slate-200'>+56 9 7682 6772</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white size-5' />
            <p className='text-slate-200'>contacto@realestate.com</p>
          </div>

        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h2 className='text-white text-2xl font-semibold'>Últimas Propiedades</h2>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop7} alt='Propiedad 7' className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h2 className='text-lg text-white'>Departamento de lujo</h2>
              <p className='text-slate-400'>UF 6.500</p>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <img src={prop8} alt='Propiedad 8' className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <div>
              <h2 className='text-lg text-white'>Depto con vista panorámica</h2>
              <p className='text-slate-400'>UF 7.800</p>
            </div>
          </div>

        </div>
        <h2 className='text-white'>Copyright 2025 Real Estate</h2>
      </footer>

      {/* Botón para deslizar hacia arriba */}

      <div id='icon-box' className='bg-red-600 p-2 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
        <Link to='hero' spy offset={-100} smooth>
          <FaArrowUp className='size-10 text-white' />
        </Link>
      </div>

      {/* Botón para alternar modo oscuro */}

      <button
        onClick={toggleDarkMode}
        className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'
      >
        {darkMode ? <FaMoon size={25} className='text-black' /> : <FaSun size={25} className='text-black' />}
      </button>

    </>
  )
}

export default Footer
