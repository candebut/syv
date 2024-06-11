const Contacto = () => {
    return (

        <div className='contacto-wrapper'>
            <div className='contacto-content'>
                <div className='contacto-text'>
                    <h1>Contactanos!</h1>
                    <p className='lato'>¿Tienes alguna pregunta o deseas solicitar un presupuesto personalizado? Estamos aquí para ayudarte. Puedes ponerte en contacto con nosotros de las siguientes maneras:</p>

                    <p className='lato'>-
                        <u>Correo Electrónico</u>: Envíanos un correo a <a href='mailto:contacto@syvbordados.com'>contacto@syvbordados.com</a>. Responderemos a tus consultas en un plazo breve.
                    </p>
                    <p className='lato'><u>Teléfono</u>: Si prefieres hablar directamente con nosotros, escribinos al <b>+54 9 11 1234 5678</b>. Estamos disponibles durante nuestro horario comercial.</p>
                    <p className='lato'>- Visítanos en persona: Si estás en Buenos Aires, podes visitarnos en <b>Martin Coronado</b>, escribinos por whatsapp y agendamos un día. Te recibiremos con gusto y resolveremos cualquier duda que tengas.</p>
                </div>
            </div>
        </div>

    )
}

export default Contacto;