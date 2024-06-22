import { motion } from 'framer-motion'
const Contacto = ({ isMobile }) => {
    return (
        <div className='contacto-main-wrapper'>
            <motion.div className='contacto-wrapper' initial={{
                opacity: 0,
            }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: .5
                    }
                }}
                viewport={{ once: true }}>
                <div>
                    <h1>Contactanos!</h1>
                    <p className='lato'>¿Tienes alguna pregunta o deseas solicitar un presupuesto personalizado? Estamos aquí para ayudarte. Puedes ponerte en contacto con nosotros de las siguientes maneras:</p>
                    <ul className='contacto-text'>

                        <li className='lato'>Formulario de contacto: Rellena nuestro formulario en línea con tus datos y consulta. Nos pondremos en contacto lo antes posible.</li>

                        <li className='lato'>

                            Correo Electrónico: Envíanos un correo a <a href='mailto:lobis.tex@gmail.com' target="_blank" rel="noreferrer">lobis.tex@gmail.com</a>.
                        </li>
                        <li className='lato'>Teléfono: Si prefieres hablar directamente con nosotros, escribinos al <b><u>+54 9 11 6227-5107</u></b>.</li>
                        <li className='lato'>Instagram: También podés enviarnos un privado a <a href='https://www.instagram.com/lobis.tex' target="_blank" rel="noreferrer">@lobis.tex</a></li>
                        <li className='lato'>Facebook: Dale like a nuestra página <a href='https://www.facebook.com/profile.php?id=61561314534498' target="_blank" rel="noreferrer">Lobis.tex</a></li>
                        <li className='lato'>Visítanos en persona: Si estás en Buenos Aires, podes visitarnos en <b>Martin Coronado</b>, escribinos por whatsapp y agendamos un día. Te recibiremos con gusto y resolveremos cualquier duda que tengas.</li>
                    </ul>
                </div>
            </motion.div>
            {isMobile ? null : (
                <>
                    <div className='contacto-photo photo-right'>
                        <motion.div initial={{
                            opacity: 0,
                            y: -100,
                        }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotate: 8,
                                transition: {
                                    duration: .5
                                }
                            }}
                            viewport={{ once: true }}></motion.div>
                    </div>
                    <div className='contacto-photo rainbow'>
                        <motion.div initial={{
                            opacity: 0,
                            y: -100,
                        }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotate: 8,
                                transition: {
                                    duration: .5
                                }
                            }}
                            viewport={{ once: true }}></motion.div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Contacto;