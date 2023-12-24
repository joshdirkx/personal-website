import fillerText from "../fillerText";
import React, {useState} from "react";

function Window() {

    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen); // This line toggles the state of the modal
    };

    return (
        <div>
            {isModalOpen && (
                <div className="modal-container absolute inset-0 bg-transparent flex justify-center items-center">
                    <div className="fixed inset-0" onClick={toggleModal}>fds</div>

                    <div
                        className="modal bg-solarized-base03 border border-solarized-base1 rounded-lg p-4 m-4 relative">
                        <div
                            className="modal-header absolute top-0 transform -translate-y-1/2 bg-solarized-base03 px-4 py-1 rounded">
                            Results
                        </div>
                        <div className="modal-content pt-8 pb-4 px-4">
                            {fillerText}
                        </div>
                    </div>

                    <div
                        className="modal bg-solarized-base03 border border-solarized-base1 rounded-lg p-4 m-4 relative">
                        <div
                            className="modal-header absolute top-0 transform -translate-y-1/2 bg-solarized-base03 px-4 py-1 rounded">
                            Grep Preview
                        </div>
                        <div className="modal-content pt-8 pb-4 px-4">
                            {fillerText}
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Window;
