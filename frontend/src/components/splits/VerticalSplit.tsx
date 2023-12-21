import React from 'react';
import fillerText from "../../fillerText";
import HorizontalSplit from "./HorizontalSplit";

function VerticalSplit() {
    return (
        <div className="flex-grow p-4 text-left flex">
            <HorizontalSplit/>
            <div className="flex-1 pl-2">
                {fillerText}
            </div>
        </div>
    );
}

export default VerticalSplit;
