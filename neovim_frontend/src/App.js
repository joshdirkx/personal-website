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
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Ut consequat semper viverra nam. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Pellentesque nec nam aliquam sem et tortor. Sed vulputate mi sit amet mauris commodo quis. Risus at ultrices mi tempus imperdiet nulla malesuada. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Lacinia at quis risus sed vulputate odio ut enim. Egestas egestas fringilla phasellus faucibus scelerisque. Nunc eget lorem dolor sed viverra. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Libero id faucibus nisl tincidunt eget nullam non nisi est. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dui id ornare arcu odio ut sem nulla pharetra. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
<br/><br/>
Amet volutpat consequat mauris nunc congue. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nunc sed velit dignissim sodales ut. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Arcu bibendum at varius vel. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Vestibulum morbi blandit cursus risus at ultrices. Diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Justo laoreet sit amet cursus sit amet dictum sit amet. Amet risus nullam eget felis eget. Euismod elementum nisi quis eleifend. Massa id neque aliquam vestibulum morbi blandit cursus. Porttitor massa id neque aliquam vestibulum. Diam maecenas sed enim ut sem viverra aliquet. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Elit duis tristique sollicitudin nibh sit. In dictum non consectetur a erat nam at. Pellentesque nec nam aliquam sem et tortor consequat. Mollis aliquam ut porttitor leo a diam sollicitudin.
<br/><br/>
Sit amet consectetur adipiscing elit duis tristique. Egestas pretium aenean pharetra magna ac placerat vestibulum. Urna nunc id cursus metus aliquam eleifend mi in nulla. Dictum varius duis at consectetur lorem donec massa. Tristique risus nec feugiat in fermentum posuere. Pulvinar neque laoreet suspendisse interdum consectetur. Gravida quis blandit turpis cursus in hac habitasse. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Massa sed elementum tempus egestas sed sed risus pretium quam. Vel pretium lectus quam id leo. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mollis nunc sed id semper risus.
<br/><br/>
Risus nec feugiat in fermentum posuere urna nec tincidunt. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Interdum velit laoreet id donec ultrices. Velit aliquet sagittis id consectetur purus. Feugiat in ante metus dictum at tempor commodo ullamcorper. Dui id ornare arcu odio ut. Lectus magna fringilla urna porttitor rhoncus dolor purus. Convallis convallis tellus id interdum velit laoreet. Vel pharetra vel turpis nunc eget lorem dolor. Consequat nisl vel pretium lectus quam id leo. Egestas diam in arcu cursus euismod quis viverra nibh cras. Et egestas quis ipsum suspendisse ultrices gravida dictum. Arcu cursus vitae congue mauris rhoncus aenean. Erat imperdiet sed euismod nisi porta lorem mollis. Facilisis sed odio morbi quis commodo odio aenean sed. Et malesuada fames ac turpis egestas sed tempus urna et.
<br/><br/>
Ultrices tincidunt arcu non sodales neque sodales ut. Ultrices eros in cursus turpis massa tincidunt. Vitae congue mauris rhoncus aenean vel elit. Urna neque viverra justo nec ultrices dui sapien eget. Urna molestie at elementum eu facilisis. Varius vel pharetra vel turpis nunc eget. Eget mauris pharetra et ultrices neque. Sem viverra aliquet eget sit amet. Ut diam quam nulla porttitor massa id neque. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Interdum posuere lorem ipsum dolor sit amet. Sem viverra aliquet eget sit amet. Dapibus ultrices in iaculis nunc sed augue. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Id aliquet risus feugiat in ante metus. A diam sollicitudin tempor id eu nisl nunc mi. Ornare arcu odio ut sem nulla pharetra diam. Dignissim convallis aenean et tortor at risus viverra. Et malesuada fames ac turpis egestas.
            </div>
          </div>

          {/* Grep Preview Modal */}
          <div className="modal bg-gray-800 border border-gray-700 rounded-lg p-4 m-4 relative">
            <div className="modal-header absolute top-0 transform -translate-y-1/2 bg-gray-800 px-4 py-1 rounded">
  Grep Preview
</div>
            <div className="modal-content pt-8 pb-4 px-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Ut consequat semper viverra nam. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Pellentesque nec nam aliquam sem et tortor. Sed vulputate mi sit amet mauris commodo quis. Risus at ultrices mi tempus imperdiet nulla malesuada. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Lacinia at quis risus sed vulputate odio ut enim. Egestas egestas fringilla phasellus faucibus scelerisque. Nunc eget lorem dolor sed viverra. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Libero id faucibus nisl tincidunt eget nullam non nisi est. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dui id ornare arcu odio ut sem nulla pharetra. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
<br/><br/>
Amet volutpat consequat mauris nunc congue. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nunc sed velit dignissim sodales ut. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Arcu bibendum at varius vel. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Vestibulum morbi blandit cursus risus at ultrices. Diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Justo laoreet sit amet cursus sit amet dictum sit amet. Amet risus nullam eget felis eget. Euismod elementum nisi quis eleifend. Massa id neque aliquam vestibulum morbi blandit cursus. Porttitor massa id neque aliquam vestibulum. Diam maecenas sed enim ut sem viverra aliquet. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Elit duis tristique sollicitudin nibh sit. In dictum non consectetur a erat nam at. Pellentesque nec nam aliquam sem et tortor consequat. Mollis aliquam ut porttitor leo a diam sollicitudin.
<br/><br/>
Sit amet consectetur adipiscing elit duis tristique. Egestas pretium aenean pharetra magna ac placerat vestibulum. Urna nunc id cursus metus aliquam eleifend mi in nulla. Dictum varius duis at consectetur lorem donec massa. Tristique risus nec feugiat in fermentum posuere. Pulvinar neque laoreet suspendisse interdum consectetur. Gravida quis blandit turpis cursus in hac habitasse. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Massa sed elementum tempus egestas sed sed risus pretium quam. Vel pretium lectus quam id leo. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mollis nunc sed id semper risus.
<br/><br/>
Risus nec feugiat in fermentum posuere urna nec tincidunt. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Interdum velit laoreet id donec ultrices. Velit aliquet sagittis id consectetur purus. Feugiat in ante metus dictum at tempor commodo ullamcorper. Dui id ornare arcu odio ut. Lectus magna fringilla urna porttitor rhoncus dolor purus. Convallis convallis tellus id interdum velit laoreet. Vel pharetra vel turpis nunc eget lorem dolor. Consequat nisl vel pretium lectus quam id leo. Egestas diam in arcu cursus euismod quis viverra nibh cras. Et egestas quis ipsum suspendisse ultrices gravida dictum. Arcu cursus vitae congue mauris rhoncus aenean. Erat imperdiet sed euismod nisi porta lorem mollis. Facilisis sed odio morbi quis commodo odio aenean sed. Et malesuada fames ac turpis egestas sed tempus urna et.
<br/><br/>
Ultrices tincidunt arcu non sodales neque sodales ut. Ultrices eros in cursus turpis massa tincidunt. Vitae congue mauris rhoncus aenean vel elit. Urna neque viverra justo nec ultrices dui sapien eget. Urna molestie at elementum eu facilisis. Varius vel pharetra vel turpis nunc eget. Eget mauris pharetra et ultrices neque. Sem viverra aliquet eget sit amet. Ut diam quam nulla porttitor massa id neque. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Interdum posuere lorem ipsum dolor sit amet. Sem viverra aliquet eget sit amet. Dapibus ultrices in iaculis nunc sed augue. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Id aliquet risus feugiat in ante metus. A diam sollicitudin tempor id eu nisl nunc mi. Ornare arcu odio ut sem nulla pharetra diam. Dignissim convallis aenean et tortor at risus viverra. Et malesuada fames ac turpis egestas.
            </div>
          </div>
        </div>
      )}

    </div>
       {/* Main Content Section */}
<div className="flex-grow p-4 text-left flex">
  {/* Left Side */}
  <div className="flex-1 pr-2 border-r border-transparent">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Ut consequat semper viverra nam. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Pellentesque nec nam aliquam sem et tortor. Sed vulputate mi sit amet mauris commodo quis. Risus at ultrices mi tempus imperdiet nulla malesuada. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Lacinia at quis risus sed vulputate odio ut enim. Egestas egestas fringilla phasellus faucibus scelerisque. Nunc eget lorem dolor sed viverra. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Libero id faucibus nisl tincidunt eget nullam non nisi est. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dui id ornare arcu odio ut sem nulla pharetra. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
<br/><br/>
Amet volutpat consequat mauris nunc congue. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nunc sed velit dignissim sodales ut. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Arcu bibendum at varius vel. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Vestibulum morbi blandit cursus risus at ultrices. Diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Justo laoreet sit amet cursus sit amet dictum sit amet. Amet risus nullam eget felis eget. Euismod elementum nisi quis eleifend. Massa id neque aliquam vestibulum morbi blandit cursus. Porttitor massa id neque aliquam vestibulum. Diam maecenas sed enim ut sem viverra aliquet. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Elit duis tristique sollicitudin nibh sit. In dictum non consectetur a erat nam at. Pellentesque nec nam aliquam sem et tortor consequat. Mollis aliquam ut porttitor leo a diam sollicitudin.
<br/><br/>
Sit amet consectetur adipiscing elit duis tristique. Egestas pretium aenean pharetra magna ac placerat vestibulum. Urna nunc id cursus metus aliquam eleifend mi in nulla. Dictum varius duis at consectetur lorem donec massa. Tristique risus nec feugiat in fermentum posuere. Pulvinar neque laoreet suspendisse interdum consectetur. Gravida quis blandit turpis cursus in hac habitasse. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Massa sed elementum tempus egestas sed sed risus pretium quam. Vel pretium lectus quam id leo. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mollis nunc sed id semper risus.
<br/><br/>
Risus nec feugiat in fermentum posuere urna nec tincidunt. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Interdum velit laoreet id donec ultrices. Velit aliquet sagittis id consectetur purus. Feugiat in ante metus dictum at tempor commodo ullamcorper. Dui id ornare arcu odio ut. Lectus magna fringilla urna porttitor rhoncus dolor purus. Convallis convallis tellus id interdum velit laoreet. Vel pharetra vel turpis nunc eget lorem dolor. Consequat nisl vel pretium lectus quam id leo. Egestas diam in arcu cursus euismod quis viverra nibh cras. Et egestas quis ipsum suspendisse ultrices gravida dictum. Arcu cursus vitae congue mauris rhoncus aenean. Erat imperdiet sed euismod nisi porta lorem mollis. Facilisis sed odio morbi quis commodo odio aenean sed. Et malesuada fames ac turpis egestas sed tempus urna et.
<br/><br/>
Ultrices tincidunt arcu non sodales neque sodales ut. Ultrices eros in cursus turpis massa tincidunt. Vitae congue mauris rhoncus aenean vel elit. Urna neque viverra justo nec ultrices dui sapien eget. Urna molestie at elementum eu facilisis. Varius vel pharetra vel turpis nunc eget. Eget mauris pharetra et ultrices neque. Sem viverra aliquet eget sit amet. Ut diam quam nulla porttitor massa id neque. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Interdum posuere lorem ipsum dolor sit amet. Sem viverra aliquet eget sit amet. Dapibus ultrices in iaculis nunc sed augue. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Id aliquet risus feugiat in ante metus. A diam sollicitudin tempor id eu nisl nunc mi. Ornare arcu odio ut sem nulla pharetra diam. Dignissim convallis aenean et tortor at risus viverra. Et malesuada fames ac turpis egestas.
  </div>

  {/* Vertical Divider */}
  <div className="flex items-center justify-center px-2">
    |
  </div>

  {/* Right Side */}
  <div className="flex-1 pl-2">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Ut consequat semper viverra nam. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Pellentesque nec nam aliquam sem et tortor. Sed vulputate mi sit amet mauris commodo quis. Risus at ultrices mi tempus imperdiet nulla malesuada. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Lacinia at quis risus sed vulputate odio ut enim. Egestas egestas fringilla phasellus faucibus scelerisque. Nunc eget lorem dolor sed viverra. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Libero id faucibus nisl tincidunt eget nullam non nisi est. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Dui id ornare arcu odio ut sem nulla pharetra. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
<br/><br/>
Amet volutpat consequat mauris nunc congue. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nunc sed velit dignissim sodales ut. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Arcu bibendum at varius vel. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Vestibulum morbi blandit cursus risus at ultrices. Diam ut venenatis tellus in metus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Justo laoreet sit amet cursus sit amet dictum sit amet. Amet risus nullam eget felis eget. Euismod elementum nisi quis eleifend. Massa id neque aliquam vestibulum morbi blandit cursus. Porttitor massa id neque aliquam vestibulum. Diam maecenas sed enim ut sem viverra aliquet. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Elit duis tristique sollicitudin nibh sit. In dictum non consectetur a erat nam at. Pellentesque nec nam aliquam sem et tortor consequat. Mollis aliquam ut porttitor leo a diam sollicitudin.
<br/><br/>
Sit amet consectetur adipiscing elit duis tristique. Egestas pretium aenean pharetra magna ac placerat vestibulum. Urna nunc id cursus metus aliquam eleifend mi in nulla. Dictum varius duis at consectetur lorem donec massa. Tristique risus nec feugiat in fermentum posuere. Pulvinar neque laoreet suspendisse interdum consectetur. Gravida quis blandit turpis cursus in hac habitasse. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Massa sed elementum tempus egestas sed sed risus pretium quam. Vel pretium lectus quam id leo. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mollis nunc sed id semper risus.
<br/><br/>
Risus nec feugiat in fermentum posuere urna nec tincidunt. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Interdum velit laoreet id donec ultrices. Velit aliquet sagittis id consectetur purus. Feugiat in ante metus dictum at tempor commodo ullamcorper. Dui id ornare arcu odio ut. Lectus magna fringilla urna porttitor rhoncus dolor purus. Convallis convallis tellus id interdum velit laoreet. Vel pharetra vel turpis nunc eget lorem dolor. Consequat nisl vel pretium lectus quam id leo. Egestas diam in arcu cursus euismod quis viverra nibh cras. Et egestas quis ipsum suspendisse ultrices gravida dictum. Arcu cursus vitae congue mauris rhoncus aenean. Erat imperdiet sed euismod nisi porta lorem mollis. Facilisis sed odio morbi quis commodo odio aenean sed. Et malesuada fames ac turpis egestas sed tempus urna et.
<br/><br/>
Ultrices tincidunt arcu non sodales neque sodales ut. Ultrices eros in cursus turpis massa tincidunt. Vitae congue mauris rhoncus aenean vel elit. Urna neque viverra justo nec ultrices dui sapien eget. Urna molestie at elementum eu facilisis. Varius vel pharetra vel turpis nunc eget. Eget mauris pharetra et ultrices neque. Sem viverra aliquet eget sit amet. Ut diam quam nulla porttitor massa id neque. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Interdum posuere lorem ipsum dolor sit amet. Sem viverra aliquet eget sit amet. Dapibus ultrices in iaculis nunc sed augue. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Id aliquet risus feugiat in ante metus. A diam sollicitudin tempor id eu nisl nunc mi. Ornare arcu odio ut sem nulla pharetra diam. Dignissim convallis aenean et tortor at risus viverra. Et malesuada fames ac turpis egestas.
  </div>
</div>

{/* Status Bar */}
<div className="fixed bottom-4 left-0 right-0 bg-green-500 text-white py-2 px-4">
  Status
</div>
    </div>
  );
};

export default App;
