import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, AccumulativeShadows, RandomizedLight, Decal, Environment, Center } from '@react-three/drei';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { state } from '../store';
import { Html } from '@react-three/drei';
import { fonts, fontSizes } from '../data'
import Select from 'react-select'
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
// import { TextTexture } from 'three/addons/geometries/TextTexture.js';

export const App = ({ position = [0, 0, 2.5], fov = 25 }) => {
    const snap = useSnapshot(state);
    const [text, setText] = useState('');
    const [font, setFont] = useState(fonts[0])
    const [fontSize, setFontSize] = useState(fontSizes[0])

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            display: 'flex',
            zIndex: 10000
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 10000
        }),
    };

    return (
        <div className='main-wrapper'>
            <div className='text-box'>
                <Select
                    value={fonts.find((option) => option.value === font)}
                    placeholder='Seleccione un tipo de letra'
                    options={fonts}
                    onChange={(value) => setFont(value)}
                    styles={customStyles}
                    isSearchable={false}
                />
                <input type="text" value={text} onChange={handleTextChange} placeholder="Ingrese su texto" />
                <div className="color-options">
                    {snap.colors.map((color) => (
                        <div key={color} className={`circle`} style={{ background: color }} onClick={() => (state.textColor = color)}></div>
                    ))}
                </div>
                <Select
                    value={fontSizes.find((option) => option.value === fontSize)}
                    placeholder='Seleccione un tamaño de letra'
                    options={fontSizes}
                    onChange={(value) => setFontSize(value)}
                    styles={customStyles}
                    isSearchable={false}
                />
            </div>
            <Canvas shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={document.getElementById('root')} eventPrefix="client">
                <ambientLight intensity={0.5} />
                <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
                <CameraRig>
                    <Backdrop />
                    <Center>
                        <Shirt text={text} font={font} fontSize={fontSize} />
                    </Center>
                </CameraRig>
            </Canvas>
        </div>
    );
};

function Backdrop() {
    const shadows = useRef();
    // useFrame((state, delta) => easing.dampC(shadows.current.getMesh().material.color, state.color, 0.25, delta));
    return (
        <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85} scale={10} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.14]}>
            <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -10]} />
            <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} />
        </AccumulativeShadows>
    );
}

function CameraRig({ children }) {
    const group = useRef();
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 2], 0.25, delta);
        easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
    });
    return <group ref={group}>{children}</group>;
}

function Shirt(props) {
    console.log('state.textColor: ', state.textColor)
    const snap = useSnapshot(state);
    const [texture, setTexture] = useState(null);
    const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');
    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

    // Convertir el texto ingresado en una imagen
    const generateTextureFromText = async () => {
        if (props.text && materials.lambert1.map) {
            const texture = new TextGeometry({
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: 48,
                text: props.text,
                color: 'black', // Font color
                backgroundColor: 'white', // Background color
            });
            setTexture(texture);
        }
    };

    useEffect(() => {
        if (props.text) {
            console.log('text: ', props.text)
            generateTextureFromText();
        }
    }, [props.text]);

    return (
        <group>
            <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={8} {...props} dispose={null}>
                {/* Render the T-shirt mesh */}
                {props.text && (
                    <Decal position={[0, 0.04, 0.15]} rotation={[0, 0, 0]} scale={0.15} map={texture} anisotropy={16}>
                        <Html position={[0, 0.1, 0.1, 0.15]} className='text-wrapper'>
                            <div style={{ fontFamily: props.font.value, fontSize: props.fontSize.value, color: snap.textColor }}>{props.text}</div>
                        </Html>
                    </Decal>
                )}
            </mesh>
        </group>
        // <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} {...props} dispose={null}>
        //     {texture && <Decal position={[0, 0.04, 0.15]} rotation={[0, 0, 0]} scale={0.15} map={texture} anisotropy={16} />}
        // </mesh>
    );
}


useGLTF.preload('/shirt_baked_collapsed.glb');
['/react.png', '/three2.png', '/pmndrs.png'].forEach(useTexture.preload);