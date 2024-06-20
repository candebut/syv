import { motion } from "framer-motion";
const Presupuesto = () => {
    return (
        <div className='presupuesto-wrapper'>
            <div className='presupuesto'>
                <h1>Presupuesto</h1>
                <div className='productos-text'>
                    <h5>En Lobis, nos esforzamos por ofrecerte un presupuesto transparente y adaptado a tus necesidades. Calculamos el valor del pedido considerando varios factores:
                    </h5>
                    <ul>
                        <li>Tipo de Prenda: Elige la prenda que deseas personalizar: buzos, camisetas, camperas u otras opciones. Cada tipo de prenda tiene un costo base.</li>
                        <li>Cantidad de Prendas: Cuantas más prendas solicites, mayor será el descuento por volumen.</li>
                        <li>Diseño de Bordado: Nuestro bordado estándar incluye un diseño en el frente y otro en el dorso. Si tienes un logotipo o texto específico, indícanoslo para ajustar el presupuesto.</li>
                    </ul>
                </div>
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
                    <h1>Presupuesto estándar + bordado</h1>
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
                    <p>
                        Podés financiarlo en cuotas. Recuerda que estos precios son aproximados y pueden variar según la complejidad del diseño y otros detalles. Si deseas un presupuesto específico para tu pedido, no dudes en contactarnos. ¡Estamos aquí para ayudarte!
                    </p>

                    <p className='patua presupuesto-text'>prenda +  bordado
                        de 28cm x 38cm</p>
                </motion.div>
            </div>


        </div>

    )
}

export default Presupuesto;