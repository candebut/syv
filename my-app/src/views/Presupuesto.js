import { motion } from "framer-motion";
const Presupuesto = () => {
    return (
        <div className='historia-wrapper'>
            <div className='presupuesto-content'>
                <motion.div className='presupuesto-text lato' initial={{
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

                    <p className='lato'>Ejemplo de Precios Aproximados:</p>
                    <p className='lato'> - 20 Sudaderas con Bordado Estándar:
                        Hasta 12 cm: 3.50 euros por unidad.
                        Hasta 20 cm: 12.00 euros por unidad.</p>
                    <p className='lato'>- 10 Camperas con Bordado Estándar:
                        Hasta 12 cm:  3.50 euros por unidad.
                        Hasta 20 cm: 12.00 euros por unidad.</p>
                    <p className='lato'> - 10 Camisetas con Bordado Estándar:
                        Hasta 12 cm: 3.50 euros por unidad.
                        Hasta 20 cm: 12.00 euros por unidad.</p>

                    <p className='patua'>Recuerda que estos precios son aproximados y pueden variar según la complejidad del diseño y otros detalles. Si deseas un presupuesto específico para tu pedido, no dudes en contactarnos. ¡Estamos aquí para ayudarte! 😊👕🧵</p>
                </motion.div>
                <div className='presupuesto-images'>
                    <div className='row'>
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
                    </div>
                    <div className='row'>
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Presupuesto;