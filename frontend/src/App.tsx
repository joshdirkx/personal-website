import React, {useState} from 'react';
import Screen from './components/Screen'
import VerticalSplit from './components/splits/VerticalSplit'
import HorizontalSplit from './components/splits/HorizontalSplit'
import Pane from './components/splits/Pane'
import fillerText from './fillerText'
import Header from './components/Header'
import NavigationMenu from './components/NavigationMenu'
import '@fontsource-variable/fira-code';

function App() {
    return (
        <Screen>
            <VerticalSplit>
                <Pane width={`1/6`}>
                    <HorizontalSplit>
                        <Pane width={`1`}>
                            <Header />
                        </Pane>
                        <Pane width={`1`} height={`full`}>
                            <NavigationMenu />
                        </Pane>
                    </HorizontalSplit>
                </Pane>
                <Pane width={`5/6`}>
                    {fillerText}
                </Pane>
            </VerticalSplit>
        </Screen>
    );
}

export default App;
