import React, {ReactNode } from 'react';
import StatusLine from "../status/StatusLine";
import fillerText from "../../fillerText";

function HorizontalSplit() {
    return (
        <div className="flex-1 pr-2 flex flex-col">
            <div className="flex-1 py-5 border border-solarized-base01">
                <div className="flex text-5xl">
                    <div className="text-solarized-green pr-12">Howdy y'all, I'm</div>
                    <div className="text-solarized-magenta">Josh</div>
                </div>
                <StatusLine content="Name" activePane={false}/>
            </div>
            <div className="flex-1 border border-solarized-base01 pr-4">
                {fillerText}
                <StatusLine content="About" activePane={true} />
            </div>
        </div>
    );
}

export default HorizontalSplit;
