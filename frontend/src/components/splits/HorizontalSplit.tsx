import React from 'react';
import StatusLine from "../status/StatusLine";
import fillerText from "../../fillerText";

interface HorizontalProps {
}

function HorizontalSplit({}: HorizontalProps) {
    return (
        <div className="flex-1 pr-2 flex flex-col">
            <div className="flex-1 py-5 border-r border-solarized-base01">
                <div className="flex text-5xl">
                    <div className="text-solarized-green pr-12">Howdy y'all, I'm</div>
                    <div className="text-solarized-magenta">Josh</div>
                </div>
                <StatusLine content="Name" activePane={false}/>
            </div>
            <div className="flex-1 border-r border-solarized-base01 pr-4">
                {fillerText}
            </div>
        </div>
    );
}

export default HorizontalSplit;
