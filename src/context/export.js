import prop1 from '../assets/images/prop1.webp'
import prop2 from '../assets/images/prop2.webp'
import prop3 from '../assets/images/prop3.webp'
import prop4 from '../assets/images/prop4.webp'
import prop5 from '../assets/images/prop5.webp'
import prop6 from '../assets/images/prop6.webp'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import client4 from '../assets/images/client4.png'
import client5 from '../assets/images/client5.png'
import client6 from '../assets/images/client6.png'
import { MdNoteAlt } from 'react-icons/md'
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro
} from 'react-icons/fa'
import { GoLaw } from 'react-icons/go'

export const property = [
  {
    images: prop1,
    address: 'Concón, Chile',
    name: 'Dúplex con Vista al Mar',
    price: 'UF 4.900',
    about:
      'Precioso dúplex con balcón frente al mar, ideal para disfrutar de los atardeceres.',
    bath: 2,
    area: '90 m²',
    owner: 'Carlos Mendoza'
  },
  {
    images: prop2,
    address: 'Ñuñoa, Santiago',
    name: 'Casa Adosada en Venta',
    price: 'UF 6.200',
    about:
      'Amplia casa adosada en un barrio exclusivo, cerca de parques y centros comerciales.',
    bath: 3,
    area: '150 m²',
    owner: 'Mariana López'
  },
  {
    images: prop3,
    address: 'Algarrobo, Chile',
    name: 'Casa en Algarrobo',
    price: 'UF 5.700',
    about:
      'Encantadora casa recién restaurada, con amplio patio, quincho  y piscina',
    bath: 2,
    area: '120 m²',
    owner: 'Fernando Ríos'
  },
  {
    images: prop4,
    address: 'Chicureo, Santiago',
    name: 'Moderno Loft con Jardín',
    price: 'UF 15.000',
    about:
      'Loft moderno con jardín privado, excelente ubicación y diseño contemporáneo.',
    bath: 3,
    area: '150 m²',
    owner: 'Lucía Fernández'
  },
  {
    images: prop5,
    address: 'Providencia, Santiago',
    name: 'Departamento de Lujo',
    price: 'UF 6.500',
    about:
      'Exclusivo departamento en una zona privilegiada, con acceso a piscina y gimnasio.',
    bath: 2,
    area: '105 m²',
    owner: 'Andrés Pérez'
  },
  {
    images: prop6,
    address: 'Las Condes, Santiago',
    name: 'Amplio Departamento',
    price: 'UF 7.800',
    about:
      'Departamento con vista panorámica ubicado en sector residencial.',
    bath: 3,
    area: '180 m²',
    owner: 'Sofía Ramírez'
  }
]

export const services = [
  {
    icon: MdNoteAlt,
    title: 'Vende tu casa',
    desc: 'Vendemos tu propiedad al mejor precio del mercado.'
  },
  {
    icon: FaHome,
    title: 'Créditos hipotecarios',
    desc: 'Te ofrecemos asesoría gratuita para obtener un crédito.'
  },
  {
    icon: GoLaw,
    title: 'Servicios legales',
    desc: 'Asesoría legal experta en temas de bienes raíces.'
  },
  {
    icon: FaSearch,
    title: 'Inspección de viviendas',
    desc: 'Nos aseguramos de que recibas lo que te prometieron.'
  },
  {
    icon: FaNotesMedical,
    title: 'Tasación',
    desc: 'Realizamos una tasación gratuita para tu hipoteca.'
  },
  {
    icon: FaCameraRetro,
    title: 'Fotografía profesional',
    desc: 'Preparamos la presentación visual de tu propiedad.'
  }
]

export const client = [
  {
    image: client1,
    name: 'Martín González',
    text: '¡Gran equipo!',
    feedback:
      'El equipo de Inmobiliaria Plus hizo un trabajo excepcional ayudándome a comprar mi primera casa.'
  },
  {
    image: client2,
    name: 'Sofía Rodríguez',
    text: 'Muy buen servicio',
    feedback:
      'Atención profesional y personalizada. Me guiaron en todo el proceso de compra.'
  },
  {
    image: client3,
    name: 'Juan Pérez',
    text: 'Recomendado',
    feedback:
      'Excelente experiencia. Me ayudaron a encontrar la casa perfecta para mi familia.'
  },
  {
    image: client4,
    name: 'Elena Fernández',
    text: 'Increíble atención',
    feedback:
      'Muy buena atención y asesoría. Compré mi departamento sin complicaciones.'
  },
  {
    image: client5,
    name: 'Carlos Ramírez',
    text: 'Muy satisfecho',
    feedback:
      'Buen servicio y asesoramiento en todo momento. 100% recomendable.'
  },
  {
    image: client6,
    name: 'Mariana López',
    text: 'Gran experiencia',
    feedback:
      'Un equipo muy profesional. Me ayudaron a vender mi casa en tiempo récord.'
  }
]
