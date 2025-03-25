import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
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
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
        <section id='contact' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%] w-full h-fit m-auto rounded-xl grid md:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}>
          <div className='bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl'>
            <h2 data-aos='zoom-in' className='text-red-500 dark:text-white uppercase font-semibold'>Contactanos</h2>

            <input
              type='text'
              placeholder='Escribe tu nombre'
              className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'
            />

            <input
              type='email'
              placeholder='Ingresa tu email'
              className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'
            />

            <input
              type='number'
              placeholder='Ingresa tu número celular'
              className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'
            />

            <textarea
              name='menssage'
              id='message'
              className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'
              cols='30'
              rows='5'
            />

            <button className='bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>
              Enviar mensaje
            </button>
          </div>

          <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
            <h2 data-aos='zoom-in' data-aos-delay='200' className='text-red-500 dark:text-white uppercase font-semibold'>¿Cómo encontrarnos?</h2>

            <h3 data-aos='zoom-in' data-aos-delay='400' className='text-black text-[28px] md:text-[35px] font-semibold leading-10 mt-2 dark:text-white'>
              Estamos aquí para ayudarte en lo que necesites
            </h3>

            <p data-aos='zoom-in' data-aos-delay='600' className='text-xl text-gray-600 dark:text-white text-justify'>
              No importa si tienes una consulta, una sugerencia o simplemente quieres saludarnos, nuestro equipo está listo para atenderte.
              Contáctanos y descubre cómo podemos ofrecerte la mejor experiencia.
            </p>
          </div>

        </section>
      </div>
    </>
  )
}

export default Contact
