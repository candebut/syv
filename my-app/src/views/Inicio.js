import { motion } from "framer-motion";
import { useEffect } from 'react';


const Inicio = () => {
    const importAll = (r) => {
        const images = {};
        r.keys().forEach((item) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    };

    const preloadImages = () => {
        console.log('preloading imgs');
        const images = importAll(
            require.context('./', false, /\.(png|jpe?gsvg)$/)
        );
        Object.values(images).forEach((image) => {
            const img = new Image();
            img.src = typeof image === 'string' ? image : image.default;
        })
    }

    useEffect(preloadImages, [])
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
        </motion.div>

    )
}

export default Inicio;