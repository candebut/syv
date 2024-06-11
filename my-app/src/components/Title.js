import { motion } from "framer-motion";
const Title = ({ title, subtitle }) => {
    return (
        <motion.div className='title-wrapper' initial={{
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
            viewport={{ once: true }}>
            <h1 className='patua'>{title}</h1>
            {subtitle ? <h3 className='lato'>{subtitle}</h3> : null}
        </motion.div>
    )
}

export default Title;