import { useDrop } from "react-dnd";
import { useSnapshot } from 'valtio'
import { state } from '../store'

const Dropbox = ({ droppedImage, setDroppedImage, text, item, image }) => {
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

    return (
        <div className={`main-img-div ${item === 'Remera' || item === 'Buzo_redondo' ? 'bigger-clothes' : ''}`} ref={drop}>
            <img
                src={image}
                alt={image}
            />
            <div
                className={`drop-div ${item}`}
                // className='drop-div tshirt'
                style={{ border: isOver ? "3px solid #6db5e7" : "0px" }}
            >
                {droppedImage && (
                    <img
                        src={droppedImage.urls.regular}
                        alt={droppedImage.alt_description}
                    />
                )}
                <p className={`bordado font-${snap.font.value} font-${snap.fontSize.value} font-${snap.textColor}`}>{text}</p>
            </div>
        </div>
    );
};

export default Dropbox;