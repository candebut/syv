import { useEffect, useRef, useState } from "react";
import "sweetalert2/dist/sweetalert2.min.css";
import html2canvas from "html2canvas";
import TextContent from "../components/TextContent";
import Dropbox from "../components/Dropbox";
import { useSnapshot } from 'valtio'
import { state } from '../store'

function Customizer({ customizeItem, item }) {
    // states
    const [droppedImage, setDroppedImage] = useState(null);
    const [text, setText] = useState('')
    const [image, setImage] = useState('Campera_negro.png');
    const snap = useSnapshot(state);


    useEffect(() => {
        getUserChoice();
        console.log('snap: ', snap)
        // eslint-disable-next-line 
    }, [snap])

    const getUserChoice = () => {
        switch (item) {
            case 'Buzo':
                setImage(`Buzo_${snap.color}.png`)
                break
            case 'Buzo_redondo':
                setImage(`Buzo_redondo_${snap.color}.png`)
                break
            case 'Campera':
                setImage(`Campera_${snap.color}.png`)
                break
            case 'Remera':
                setImage(`Remera_${snap.color}.png`)
                break
            default: setImage('Remera_blanco.png')
                break
        }
    }

    // download image
    const downloadableAreaRef = useRef(null);
    const downloadImage = () => {
        const element = downloadableAreaRef.current;
        // Create a canvas with the desired dimensions
        const canvas = document.createElement("canvas");
        canvas.width = 2480;
        canvas.height = 2600;
        const ctx = canvas.getContext("2d");

        // Capture the content onto the canvas
        html2canvas(element, { allowTaint: true, useCORS: true }).then(
            (sourceCanvas) => {
                // Draw the captured content onto the new canvas with resizing
                ctx.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);

                // Convert the canvas to a data URL and create a download link
                const imgData = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.download = `${item}.png`;
                link.href = imgData;
                link.click();
            }
        );
    };

    return (
        <>
            <div className="container">
                <div className="leftside">
                    <div className="content">
                        <TextContent text={text} setText={setText} />
                    </div>
                </div>
                <div className="rightside">
                    <div className="btns-flex">
                        <button
                            type="button"

                            onClick={downloadImage}
                        >
                            Descargar muestra
                        </button>
                        <button className='close' onClick={() => customizeItem(null)}>X</button>
                    </div>
                    <div className="downloadable-area" ref={downloadableAreaRef}>
                        <Dropbox
                            droppedImage={droppedImage}
                            setDroppedImage={setDroppedImage}
                            text={text}
                            item={item}
                            image={image}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customizer;