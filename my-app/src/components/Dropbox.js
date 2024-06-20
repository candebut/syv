import { useDrop } from "react-dnd";
import { useSnapshot } from 'valtio'
import { state } from '../store'

const Dropbox = ({ userChoiceToCustomize, droppedImage, setDroppedImage, text, item }) => {
    const snap = useSnapshot(state)
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: "object",
            drop: (item) => dropImage(item),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
        }),
        []
    );

    const dropImage = (item) => {
        setDroppedImage(item);
    };

    const getUserChoice = () => {
        //agregar variable: __{color}
        switch (item) {
            case 'shirt':
                return 'shirt_shadow.png'
            case 'hoodie':
                return 'hoodie_shadow.png'
            case 'campera':
                return 'campera_shadow.png'
            default: return 'hoodie_shadow.png'
        }
    }

    return (
        <div className="main-img-div" ref={drop}>
            <img
                src={getUserChoice()}
                alt={getUserChoice()}
            />
            <div
                className='drop-div tshirt'
                style={{ border: isOver ? "3px solid #6db5e7" : "0px" }}
            >
                {droppedImage && (
                    <img
                        src={droppedImage.urls.regular}
                        alt={droppedImage.alt_description}
                    />
                )}
                <p className={`bordado font-${snap.font.value} font-${snap.fontSize.value} font-${state.textColor}`}>{text}</p>
            </div>
        </div>
    );
};

export default Dropbox;