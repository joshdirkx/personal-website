import React, {ReactNode} from 'react';

interface VerticalSplitProps {
    children?: ReactNode;
}

function HorizontalSplit({children}: VerticalSplitProps) {
    return (
        <div className={`flex-1 flex-col`}>
            {children}
        </div>
    );
}

export default HorizontalSplit;
