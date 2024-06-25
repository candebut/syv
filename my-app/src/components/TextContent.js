import { state } from '../store'
import { fonts, fontSizes } from '../data'
import Select from 'react-select'

const TextContent = ({ text, setText, item }) => {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            display: 'flex',
            fontSize: '12px'

        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 10000,
            color: 'black',
        }),
    };
    return (
        <div className="customizer">
            <div className='text-box'>
                <Select
                    value={fonts.find((option) => option.value === state.font)}
                    placeholder='Seleccione tipo y color de letra'
                    options={fonts}
                    onChange={(value) => state.font = value}
                    styles={customStyles}
                    isSearchable={false}
                />
                <div className="color-options">
                    {state.colors.map((color) => (
                        <div key={color} className={`circle`} style={{ background: '#' + color }} onClick={() => (state.textColor = color)}></div>
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

                <input onChange={(e) => setText(e.target.value)} value={text} placeholder='Ingrese su texto' />
                <div className="color-options clothes-color">
                    {item !== 'Campera' ? state.newColors.map((color) => (
                        <div key={color.label} className={`circle`} style={{ background: '#' + color.value }} onClick={() => (state.color = color.label)}></div>
                    )) : state.camperaColors.map((color) => (
                        <div key={color.label} className={`circle`} style={{ background: '#' + color.value }} onClick={() => (state.color = color.label)}></div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default TextContent;