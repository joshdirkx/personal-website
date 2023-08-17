import React from 'react';

function App() {
  return (
    <div className="content p-4 bg-white bg-opacity-80 rounded-lg max-w-lg mx-auto mt-10 overflow-y-auto h-4/5">
      <h1 className="text-2xl font-bold mb-4">Your Name</h1>
      <p className="mb-4">Short bio or introduction...</p>

      <h2 className="text-xl font-semibold mb-2">Education</h2>
      {/* Education details here */}

      <h2 className="text-xl font-semibold mb-2">Experience</h2>
      {/* Work experience details here */}
    </div>
  );
}

export default App;
