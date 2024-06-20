import { motion } from "framer-motion";
import Footer from '../components/Footer'
const Historia = () => {
    return (
        <div className='historia-wrapper'>
            <div className='d-flex row historia-content'>
                <div className='historia-photo photo-left'>
                    <div className='historia-photo-content-left'></div>
                </div>
                <div className='historia-main-content column'>
                    <div className='about-us column'>
                        <h3>Sobre Nosotros</h3>
                        <p>
                            Llevamos más de 20 años en el sector textil. Esta empresa familiar se destaca por su expertise en el bordado y la personalización de prendas. Desde buzos de egresados hasta uniformes para emprendedores y obreros de todos los sectores. Lobis ha tejido una historia de creatividad y calidad.
                        </p>
                    </div>
                    <div className='compromise column'>
                        <h3>Nuestro Compromiso</h3>
                        <p>- Calidad Superior: Creemos que cada prenda debe ser un reflejo de excelencia. Por eso, seleccionamos cuidadosamente las prendas y aplicamos bordados e impresiones de alta calidad.
                        </p>
                        <p>- Accesibilidad: Creemos que la calidad y la accesibilidad no deben ser excluyentes. Nos esforzamos por ofrecer diversas opciones a precios justos y accesibles. Queremos que todos tengan la oportunidad sin comprometer su presupuesto.
                        </p>
                        <p>- Estética Impecable: No solo nos preocupamos por la calidad, sino también por el diseño. Nuestras prendas no solo son funcionales, sino también atractivas. Queremos que te sientas orgulloso al llevar una prenda que refleje tu estilo y personalidad.</p>
                    </div>
                </div>
                <div className='historia-photo photo-right'>
                    <div className='historia-photo-content-right'></div>
                </div>
            </div>
        </div>
    )
}

export default Historia;