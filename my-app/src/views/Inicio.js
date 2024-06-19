import Title from '../components/Title'
import { motion } from "framer-motion";


const Inicio = () => {
    return (
        <motion.div className='home-content'>
            <div className='photos-wrapper'>
                <div className='photo-box'>
                    <motion.div className='photo-portrait' initial={{
                        opacity: 0,
                        x: 50
                    }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}>
                    </motion.div>
                    <h3 className='photo-portrait-text'>Egresados</h3>
                </div>
                <div className='photo-box'>
                    <motion.div className='photo-portrait photo-2' initial={{
                        opacity: 0,
                        x: 50
                    }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}>
                    </motion.div>
                    <h3 className='photo-portrait-text business'>Business</h3>
                </div>
            </div>

            {/* <motion.div className='semi-circle' initial={{
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
                viewport={{ once: true }}>
                <img src='./hoodie_girl.jpeg'></img>
            </motion.div> */}
        </motion.div>
    )
}

export default Inicio;