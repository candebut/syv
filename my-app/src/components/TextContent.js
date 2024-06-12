import { useSnapshot } from 'valtio'
import { state } from '../store'
import { fonts, fontSizes } from '../data'
import Select from 'react-select'

const TextContent = ({ text, setText }) => {
    const snap = useSnapshot(state)
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
        <div className="customizer">
            <div className='text-box'>
                <Select
                    value={fonts.find((option) => option.value === state.font)}
                    placeholder='Seleccione un tipo de letra'
                    options={fonts}
                    onChange={(value) => state.font = value}
                    styles={customStyles}
                    isSearchable={false}
                />
                <div className="color-options">
                    {snap.colors.map((color) => (
                        <div key={color} className={`circle`} style={{ background: color }} onClick={() => (state.textColor = color)}></div>
                    ))}
                </div>
                <Select
                    value={fontSizes.find((option) => option.value === state.fontSize)}
                    placeholder='Seleccione un tamaño de letra'
                    options={fontSizes}
                    onChange={(value) => state.fontSize = value}
                    styles={customStyles}
                    isSearchable={false}
                />

                <input onChange={(e) => setText(e.target.value)} value={text} />
                <div className="color-options">
                    {snap.colors.map((color) => (
                        <div key={color} className={`circle`} style={{ background: color }} onClick={() => (state.color = color)}></div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default TextContent;