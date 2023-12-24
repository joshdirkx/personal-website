import React, { ReactNode } from 'react';

interface PaneProps {
    children?: ReactNode;
    width?: string;
    height?: string;
}
function Pane({ children, width, height }: PaneProps) {
    return (
        <div className={`flex flex-1 flex-col border-r border-b border-solarized-base01 w-${width} h-${height}`}>
            {children}
        </div>
    );
}

export default Pane;
