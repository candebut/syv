import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import html2canvas from "html2canvas";
import TextContent from "../components/TextContent";
import Dropbox from "../components/Dropbox";
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { fonts, fontSizes } from '../data'


function Customizer({ customizeItem, item }) {
    // states
    const [userChoiceToCustomize, setUserChoiceToCustomize] = useState("T-Shirt");
    const [droppedImage, setDroppedImage] = useState(null);
    const [text, setText] = useState('')
    const [image, setImage] = useState('Remera_blanco.png');
    const snap = useSnapshot(state);


    useEffect(() => {
        getUserChoice();
        console.log('snap: ', snap)
    }, [snap])

    // handle user choice
    const handleUserChoice = () => {
        if (!droppedImage) {
            setUserChoiceToCustomize(
                userChoiceToCustomize === "T-Shirt" ? "Mug" : "T-Shirt"
            );
        } else {
            Swal.fire({
                title: "Do you wish to continue?",
                text: `Switching to ${userChoiceToCustomize === "T-Shirt" ? "Mug" : "T-Shirt"
                    } will cause you to lose all your current progress.`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    setUserChoiceToCustomize(
                        userChoiceToCustomize === "T-Shirt" ? "Mug" : "T-Shirt"
                    );
                    setDroppedImage(null);
                }
            });
        }
    };

    const getUserChoice = () => {
        //agregar variable: __{color}
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
        canvas.width = userChoiceToCustomize === "T-Shirt" ? 1280 : 820;
        canvas.height = userChoiceToCustomize === "T-Shirt" ? 1024 : 512;

        // Get the 2D context of the canvas
        const ctx = canvas.getContext("2d");

        // Capture the content onto the canvas
        html2canvas(element, { allowTaint: true, useCORS: true }).then(
            (sourceCanvas) => {
                // Draw the captured content onto the new canvas with resizing
                ctx.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);

                // Convert the canvas to a data URL and create a download link
                const imgData = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.download = `${userChoiceToCustomize}.png`;
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
                            userChoiceToCustomize={userChoiceToCustomize}
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