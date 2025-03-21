import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import area1 from '../assets/images/area1.jpg'
import area2 from '../assets/images/area2.jpg'
import area3 from '../assets/images/area3.jpg'

const PopularAreas = () => {
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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col items-center px-6 py-20 gap-10 md:px-10`}>

        <div className='w-full text-center md:text-left'>
          <h2 data-aos='zoom-in' className='text-red-500 dark:text-white uppercase font-semibold'>
            Áreas más populares
          </h2>
          <h3 data-aos='zoom-in' data-aos-delay='200' className='text-black text-[28px] md:text-[35px] font-semibold leading-10 mt-4 dark:text-white'>
            Explora y descubre los lugares más populares
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
          {[area1, area2, area3].map((area, index) => (
            <div
              key={index}
              data-aos='zoom-in'
              data-aos-delay={400 + index * 200}
              className='h-[300px] md:h-[400px] bg-cover bg-center rounded-xl'
              style={{ backgroundImage: `url(${area})`, backgroundRepeat: 'no-repeat' }}
            />
          ))}
        </div>

      </section>
    </div>
  )
}

export default PopularAreas
