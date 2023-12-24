import React, { ReactNode } from 'react';

interface LeftPaneProps {
    children?: ReactNode;
    width?: string;
    height?: string;
}
function Pane({ children, width, height }: LeftPaneProps) {
    return (
        <div className={`flex flex-1 flex-col border-r border-b border-solarized-base01 w-${width} h-${height}`}>
            {children}
        </div>
    );
}

export default Pane;
