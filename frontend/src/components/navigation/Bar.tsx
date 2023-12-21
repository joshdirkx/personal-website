import React, {useState} from 'react';
import fillerText from "../../fillerText";
import Tab from './Tab';

function Bar() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen); // This line toggles the state of the modal
    };

    return (
        <div className="flex justify-between bg-solarized-base02 px-4 py-top-2">
            <div className="tabs flex">
                <Tab text="Home" />
                <Tab text="About" />
                <Tab text="Contact" />
                <Tab text="Articles" />
                <Tab text="Case Studies" />
            </div>
            {/* Central Button */}
            <button
                className="px-4 py-top-1 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
                onClick={toggleModal} // When clicked, this button will open or close the modals
            >
                {isModalOpen ? 'Close Modals' : 'Open Modals'} {/* The button text changes based on the state */}
            </button>

            {/* Modals */}
            {isModalOpen && (
                <div className="modal-container absolute inset-0 bg-transparent flex justify-center items-center">
                    <div className="fixed inset-0" onClick={toggleModal}></div>

                    {/* Results Modal */}
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

                    {/* Grep Preview Modal */}
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
    );
};

export default Bar;
