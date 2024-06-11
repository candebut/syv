import Title from '../components/Title'
import { motion } from "framer-motion";

const Inicio = () => {
    return (
        <motion.div className='home-content'>
            <Title title='LOBIS' subtitle='¡Buzos de egresados y más!' />
            <motion.div className='semi-circle' initial={{
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
            </motion.div>
        </motion.div>
    )
}

export default Inicio;