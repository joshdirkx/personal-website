import React from 'react';
import Screen from './components/Screen'
import Pane from './components/Pane'
import Split from './components/Split'
import fillerText from './fillerText'
import Header from './components/Header'
import NavigationMenu from './components/NavigationMenu'
import '@fontsource-variable/fira-code';

function App() {
    return (
        <Screen>
            <Split isVertical={true}>
                <Pane width={`1/6`}>
                    <Split isVertical={false}>
                        <Pane width={`1`}>
                            <Header />
                        </Pane>
                        <Pane width={`1`} height={`full`}>
                            <NavigationMenu />
                        </Pane>
                    </Split>
                </Pane>
                <Pane width={`5/6`}>
                    {fillerText}
                </Pane>
            </Split>
        </Screen>
    );
}

export default App;
