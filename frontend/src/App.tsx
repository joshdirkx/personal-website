import React from 'react';
import VerticalSplit from './components/splits/VerticalSplit'
import Bar from './components/navigation/Bar'
import '@fontsource-variable/fira-code';

function App() {
    return (
        <div className="bg-solarized-base03 h-screen text-solarized-base1">
            <Bar />
            <VerticalSplit />
        </div>
    );
}

export default App;
