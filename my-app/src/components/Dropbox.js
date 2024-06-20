import { useDrop } from "react-dnd";
import { useSnapshot } from 'valtio'
import { state } from '../store'

const Dropbox = ({ userChoiceToCustomize, droppedImage, setDroppedImage, text }) => {
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
        switch (userChoiceToCustomize) {
            case 'T-Shirt':
                return 'tshirt'
            default: return 'hoodie'
        }
    }

    return (
        <div className="main-img-div" ref={drop}>
            <img
                src={userChoiceToCustomize === "T-Shirt" ? "shirt_shadow.png" : "hoodie_shadow.png"}
                alt={userChoiceToCustomize === "T-Shirt" ? "tshirt" : "hoodie"}
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