import SP0001 from '../resources/proyectos/SP0001.webp'
import SP0002 from '../resources/proyectos/SP0002.webp'
import BNR0001 from '../resources/proyectos/BNR0001_1.webp'
import BNR0002 from '../resources/proyectos/BNR0002_1.webp'
import BNR0002_2 from '../resources/proyectos/BNR0002_2.webp'


//Galeria Lailo
import GLL001 from '../resources/proyectos/GL0001/001.webp'
import GLL002 from '../resources/proyectos/GL0001/002.webp'
import GLL003 from '../resources/proyectos/GL0001/003.webp'
import GLL004 from '../resources/proyectos/GL0001/004.webp'
import GLL005 from '../resources/proyectos/GL0001/005.webp'

export const multimedia = [

    {
        id: "SP0001",
        image: SP0001,
        titulo: "lailo",
        presentacion: "Proyecto de Animacion 3D",
        urlPage: "/portafolio/SP0001",
        banner: BNR0001,
        acercaDe: '"Lailo, el mundo visto desde botones" es una historia relatada a través de imágenes y cortas animaciones. Con este proyecto no sólo se busca mejorar en la animación 3d y la composición artística, sino que buscamos reflejar las aventuras de una criatura que explora su alrededor mientras conoce la realidad en la que vivimos.',
        linkYT:<iframe className='linkYT' src="https://www.youtube.com/embed/Mfikt3qdgjs" title="Teaser - Lailo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        galeria: [GLL001, GLL002, GLL003, GLL004, GLL005],
    },
    {
        id: "SP0002",
        image: SP0002,
        titulo: "coded",
        presentacion: "Videojuego",
        urlPage: "/portafolio/SP0002",
        banner: BNR0002,
        acercaDe: 'Coded es un videojuego, que está siendo desarrollado por Producciones Santimartz; en él se sigue la historia de Milo, un personaje que surgió debido a un error de programación; por lo cual se verá obligado a sobrevivir en un mundo digital, donde sus mayores enemigos son programas maliciosos y virus totalmente destructivos.',
        banner2: BNR0002_2,
        linkYT:<iframe className='linkYT' src="https://www.youtube.com/embed/0hDPvlkg1Lw" title="Trailer - 'CODED'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },

]