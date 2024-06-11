import { motion } from "framer-motion";
const Presupuesto = () => {
    return (
        <div className='historia-wrapper'>
            <motion.div className='presupuesto-content' initial={{
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

                <div className='empty-third'></div>
                <table className="price-table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>remera</td>
                            <td>desde $23.250</td>
                        </tr>
                        <tr>
                            <td>buzo</td>
                            <td>desde $36.000</td>
                        </tr>
                        <tr>
                            <td>buzo canguro</td>
                            <td>desde $38.000</td>
                        </tr>
                        <tr>
                            <td>campera</td>
                            <td>desde $40.000</td>
                        </tr>
                    </tbody>
                </table>

                <p className='patua presupuesto-text'>prenda +  bordado
                    de 28cm x 38cm</p>
            </motion.div>
            <motion.div className='patua presupuesto-hint'>
                Podés financiarlo en cuotas. Recuerda que estos precios son aproximados y pueden variar según la complejidad del diseño y otros detalles. Si deseas un presupuesto específico para tu pedido, no dudes en contactarnos. ¡Estamos aquí para ayudarte!
            </motion.div>


        </div>

    )
}

export default Presupuesto;