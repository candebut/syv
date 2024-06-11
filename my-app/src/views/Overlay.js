import { Logo } from '@pmndrs/branding'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillCamera, AiOutlineArrowLeft, AiOutlineHighlight, AiOutlineShopping } from 'react-icons/ai'
import { useSnapshot } from 'valtio'
import { state } from '../store'

export function Overlay() {
    const transition = { type: 'spring', duration: 0.8 }
    const config = {
        initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
        animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
        exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
    }
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
                {/* <Logo width="40" height="40" /> */}
                <motion.div animate={{ x: 100, opacity: 0 }} transition={transition}>
                    <AiOutlineShopping size="3em" />
                </motion.div>
            </motion.header>

            <motion.section key="custom" {...config}>
                <Customizer />
            </motion.section>


        </div>
    )
}

function Customizer() {
    const snap = useSnapshot(state)
    return (
        <div className="customizer">
            <div className="color-options">
                {snap.colors.map((color) => (
                    <div key={color} className={`circle`} style={{ background: color }} onClick={() => (state.color = color)}></div>
                ))}
            </div>
            {/* <div className="decals">
                <div className="decals--container">
                    {snap.decals.map((decal) => (
                        <div key={decal} className={`decal`} onClick={() => (state.decal = decal)}>
                            <img src={decal + '_thumb.png'} alt="brand" />
                        </div>
                    ))}
                </div>
            </div> */}
            <button
                className="share"
                style={{ background: snap.color }}
                onClick={() => {
                    const link = document.createElement('a')
                    link.setAttribute('download', 'canvas.png')
                    link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
                    link.click()
                }}>
                DESCARGAR
                <AiFillCamera size="1.3em" />
            </button>
            {/* <button className="exit" style={{ background: snap.color }}>
                VOLVER
                <AiOutlineArrowLeft size="1.3em" />
            </button> */}
        </div>
    )
}
