import React from 'react';
import StatusLine from "../status/StatusLine";
import fillerText from "../../fillerText";
import HorizontalSplit from "./HorizontalSplit";

interface VerticalProps {
}

function VerticalSplit({}: VerticalProps) {
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
