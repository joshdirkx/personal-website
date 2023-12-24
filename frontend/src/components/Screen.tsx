import React, { ReactNode } from 'react';

interface ScreenProps {
    children?: ReactNode;
}
function Screen({ children }: ScreenProps) {
    return (
        <div className="bg-solarized-base03 h-screen text-solarized-base1 w-screen flex">
            {children}
        </div>
    );
}

export default Screen;
