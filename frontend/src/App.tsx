import React, {useState} from 'react';
import fillerText from './fillerText';
import StatusLine from './components/status/StatusLine'
import VerticalSplit from './components/splits/VerticalSplit'
import Bar from './components/navigation/Bar'
import '@fontsource-variable/fira-code';

function App() {
    return (
        <div className="bg-solarized-base03 h-screen text-solarized-base1">
<Bar />
            <VerticalSplit />

            <StatusLine content="About" activePane={true}/>
        </div>
    );
}

export default App;
