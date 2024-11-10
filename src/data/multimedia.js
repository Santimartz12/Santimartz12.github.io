import SP0001 from '../resources/proyectos/SP0001.webp'
import SP0002 from '../resources/proyectos/SP0002.webp'
import SP0003 from '../resources/proyectos/SP0003.webp'
import BNR0001 from '../resources/proyectos/BNR0001_1.webp'
import BNR0002 from '../resources/proyectos/BNR0002_1.webp'
import BNR0002_2 from '../resources/proyectos/BNR0002_2.webp'
import BNR0003 from '../resources/proyectos/BNR0003.webp'

//Galeria Lailo
import GLL001 from '../resources/proyectos/GL0001/001.webp'
import GLL002 from '../resources/proyectos/GL0001/002.webp'
import GLL003 from '../resources/proyectos/GL0001/003.webp'
import GLL004 from '../resources/proyectos/GL0001/004.webp'
import GLL005 from '../resources/proyectos/GL0001/005.webp'


//Galeria Matte Painting
import GLM001 from '../resources/proyectos/GL0002/001.webp'
import GLM002 from '../resources/proyectos/GL0002/002.webp'
import GLM003 from '../resources/proyectos/GL0002/003.webp'
import GLM004 from '../resources/proyectos/GL0002/004.webp'
import GLM005 from '../resources/proyectos/GL0002/005.webp'
import GLM006 from '../resources/proyectos/GL0002/006.webp'
import GLM007 from '../resources/proyectos/GL0002/007.webp'
import GLM008 from '../resources/proyectos/GL0002/008.webp'

export const multimedia = [

    {
        id: "SP0001",
        image: SP0001,
        titulo: "lailo",
        presentacion: "project3D",
        urlPage: "/portafolio/SP0001",
        banner: BNR0001,
        acercaDe: 'lailoDescription',
        linkYT:<iframe className='linkYT' src="https://www.youtube.com/embed/Mfikt3qdgjs" title="Teaser - Lailo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        galeria: [GLL001, GLL002, GLL003, GLL004, GLL005],
    },
    {
        id: "SP0002",
        image: SP0002,
        titulo: "coded",
        presentacion: "videogame",
        urlPage: "/portafolio/SP0002",
        banner: BNR0002,
        acercaDe: 'codedDescription',
        banner2: BNR0002_2,
        linkYT:<iframe className='linkYT' src="https://www.youtube.com/embed/0hDPvlkg1Lw" title="Trailer - 'CODED'" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
    {
        id: "SP0003",
        image: SP0003,
        titulo: "matte painting",
        presentacion: "artGallery",
        urlPage: "/portafolio/SP0003",
        acercaDe: 'mattePaintingDescription',
        art: BNR0003,
        galeria: [GLM001, GLM002, GLM003, GLM004, GLM005, GLM006, GLM007, GLM008,],
    },

]