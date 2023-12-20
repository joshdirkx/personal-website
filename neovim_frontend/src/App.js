import React, { useState } from 'react';
import './App.css'; // Make sure Tailwind CSS is imported
import "@fontsource/fira-code"; // Defaults to weight 400

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen); // This line toggles the state of the modal
  };

  return (
    <div className="App bg-gray-900 h-screen text-white">
      {/* Tab Navigation Bar */}
      <div className="flex justify-between bg-gray-800 px-4 py-2">
        <div className="tabs flex">
          <div className="tab bg-gray-700 px-4 py-2 rounded-t-lg">Home</div>
          <div className="tab bg-gray-700 px-4 py-2 rounded-t-lg">About</div>
          <div className="tab bg-gray-700 px-4 py-2 rounded-t-lg">Contact</div>
          <div className="tab bg-gray-700 px-4 py-2 rounded-t-lg">Articles</div>
          <div className="tab bg-gray-700 px-4 py-2 rounded-t-lg">Case Studies</div>

        </div>
        {/* Central Button */}
      <button
        className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
        onClick={toggleModal} // When clicked, this button will open or close the modals
      >
        {isModalOpen ? 'Close Modals' : 'Open Modals'} {/* The button text changes based on the state */}
      </button>

      {/* Modals */}
      {isModalOpen && (
        <div className="modal-container absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="fixed inset-0" onClick={toggleModal}></div>

          {/* Results Modal */}
          <div className="modal bg-gray-800 border border-gray-700 rounded-lg p-4 m-4 relative">
            <div className="modal-header absolute top-0 transform -translate-y-1/2 bg-gray-800 px-4 py-1 rounded">
              Results
            </div>
            <div className="modal-content pt-8 pb-4 px-4">
              ...Results content...
            </div>
          </div>

          {/* Grep Preview Modal */}
          <div className="modal bg-gray-800 border border-gray-700 rounded-lg p-4 m-4 relative">
            <div className="modal-header absolute top-0 transform -translate-y-1/2 bg-gray-800 px-4 py-1 rounded">
  Grep Preview
</div>
            <div className="modal-content pt-8 pb-4 px-4">
              ...Grep Preview content...
            </div>
          </div>
        </div>
      )}

    </div>
{/* Status Bar */}
<div className="fixed bottom-4 left-0 right-0 bg-green-500 text-white py-2 px-4">
  Status
</div>
    </div>
  );
};

export default App;
