import React from 'react';

interface StatusLineProps {
    content: string;
    activePane?: boolean;
}

function StatusLine({content, activePane}: StatusLineProps) {
    return (
        <div className="bottom-4 left-0 right-0 bg-solarized-base02 text-solarized-base1 py-1 px-4 text-left">
            <div className="flex">
                <div className="pr-2">
                    {activePane && (<div className="pl-2 pr-2 bg-solarized-blue text-solarized-base03">Main</div>)}
                </div>
                <div>{content}</div>
            </div>
        </div>
    );
}

export default StatusLine;
