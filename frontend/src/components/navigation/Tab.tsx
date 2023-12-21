import React from 'react';

interface TabProps {
    text: string;
}

function Tab({text}: TabProps) {
    return (
        <div className="pr-2">
            <div className="tab bg-solarized-base03 px-10 py-top-1 rounded-t-lg">{text}</div>
        </div>
    );
};

export default Tab;
