import { motion } from "framer-motion";
import { App as Canvas } from './Canvas'
import { Overlay } from './Overlay'
const Productos = ({ item, setItem }) => {
    const customizeItem = (item) => {
        console.log('item: ', item)
        // setItem(item)
    }
    return (
        <div>
            {item ? (
                <div className='w-100 h-100'>
                    <Canvas />
                    <Overlay />
                </div>
            ) :
                (
                    <div className='productos-wrapper patua'>
                        <h1>Personaliza tus favoritos!</h1>
                        <div className='productos-images'>
                            <motion.div whileHover={{ scale: 1.2 }} initial={{
                                opacity: 0,
                                y: -100,
                            }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: .5
                                    }
                                }}
                                viewport={{ once: true }} className='product-image' onClick={() => customizeItem('hoodie')}>
                                <img src="./hoodie_shadow.png" alt="shirt" />
                            </motion.div>
                            <motion.div onClick={() => customizeItem('shirt')} whileHover={{ scale: 1.2 }} initial={{
                                opacity: 0,
                                y: -100,
                            }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{ once: true }} className='product-image'>
                                <img src="./shirt_shadow.png" alt="shirt" />
                            </motion.div>
                            <motion.div onClick={() => customizeItem('campera')} whileHover={{ scale: 1.2 }} initial={{
                                opacity: 0,
                                y: -100,
                            }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1.5
                                    }
                                }}
                                viewport={{ once: true }} className='product-image'>
                                <img src="./campera_shadow.png" alt="shirt" />
                            </motion.div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Productos;