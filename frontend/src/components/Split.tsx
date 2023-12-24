import React, { ReactNode } from 'react';

interface SplitProps {
    children?: ReactNode;
    isVertical?: boolean;
    width?: string;
    height?: string;
}
function Split({ children, isVertical, width, height }: SplitProps) {
    return (
        <div className={`${isVertical ? 'h-screen flex' : 'flex-col flex-1' } border-r border-b border-solarized-base01 w-${width} h-${height}`}>
            {children}
        </div>
    );
}

export default Split;
