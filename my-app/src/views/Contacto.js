import { motion } from 'framer-motion'
const Contacto = () => {
    return (

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
            <h1>Contactanos!</h1>
            <p className='lato'>¿Tienes alguna pregunta o deseas solicitar un presupuesto personalizado? Estamos aquí para ayudarte. Puedes ponerte en contacto con nosotros de las siguientes maneras:</p>
            <ul className='contacto-text'>

                <ul className='lato'><u>Formulario de contacto</u>: Rellena nuestro formulario en línea con tus datos y consulta. Nos pondremos en contacto lo antes posible.</ul>

                <ul className='lato'>

                    <u>Correo Electrónico</u>: Envíanos un correo a <a href='mailto:lobis.egresados@gmail.com'>lobis.egresados@gmail.com</a>.
                </ul>
                <ul className='lato'><u>Teléfono</u>: Si prefieres hablar directamente con nosotros, escribinos al <b>+54 9 11 1234 5678</b>.</ul>
                <ul className='lato'><u>Visítanos en persona</u>: Si estás en Buenos Aires, podes visitarnos en <b>Martin Coronado</b>, escribinos por whatsapp y agendamos un día. Te recibiremos con gusto y resolveremos cualquier duda que tengas.</ul>
            </ul>
        </motion.div>

    )
}

export default Contacto;