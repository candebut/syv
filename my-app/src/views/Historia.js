import { motion } from "framer-motion";
const Historia = () => {
    return (
        <div className='historia-wrapper'>
            <div className='historia-content'>
                <div className='historia-images'>
                    <div className='row'>

                        <motion.div className='o' initial={{
                            opacity: 0,
                            y: -50,
                        }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1
                                }
                            }}
                            viewport={{ once: true }}></motion.div>
                        <motion.div className='d' initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: 50
                        }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}></motion.div>
                    </div>
                    <div className='row'>
                        <motion.div className='u' initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: -50
                        }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}></motion.div>
                        <motion.div className='box' initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            y: 50,
                        }}
                            whileInView={{
                                opacity: 1,
                                y: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}></motion.div>
                    </div>

                </div>
                <motion.div className='historia-text lato' initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: 100,
                }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}>
                    <h3>Sobre nosotros</h3>
                    <p className='patua'>Llevamos más de 20 años en el sector textil, y nuestra pasión por la calidad y la artesanía nos ha llevado a especializarnos en buzos de egresados bordados. Somos una empresa familiar con raíces en San Martín, Buenos Aires, Argentina. A lo largo de las generaciones, hemos experimentado el orgullo y la emoción de tener hijos egresados, y entendemos la importancia de encontrar productos que cumplan con altos estándares de calidad.</p>

                    <h3>Nuestro Compromiso</h3>
                    <p className='patua'>- Calidad Superior: En Lobis, creemos que cada prenda debe ser un reflejo de excelencia. Por eso, seleccionamos cuidadosamente las prendas y aplicamos bordados de alta calidad.</p>
                    <p className='patua'>- Accesibilidad: Entendemos que el último año de escuela puede ser desafiante en muchos aspectos. Por eso, nos comprometemos a ofrecer buzos, camperas y remeras personalizadas a precios accesibles. Queremos que todos tengan la oportunidad de lucir una prenda única y especial sin comprometer su presupuesto.</p>
                    <p className='patua'>Estética Impecable: No solo nos preocupamos por la calidad, sino también por el diseño. Nuestras prendas no solo son funcionales, sino también estéticamente atractivas. Queremos que te sientas orgulloso al llevar una prenda que refleje tu estilo y personalidad.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Historia;