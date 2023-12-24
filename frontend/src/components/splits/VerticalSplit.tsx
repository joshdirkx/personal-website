import React, { ReactNode } from 'react';

interface VerticalSplitProps {
    children?: ReactNode;
}
function VerticalSplit({ children }: VerticalSplitProps) {
    return (
        <div className="flex h-screen">
            {children}
        </div>
    );
}

export default VerticalSplit;
