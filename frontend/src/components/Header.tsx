import React from 'react';

function Header() {
    return (
        <div className={`text-solarized-magenta`}>
            <pre>
                {`
                  __   __           __     __
               | /  \\ /__\` |__|    |  \\ | |__) |__/ \\_/
            \\__/ \\__/ .__/ |  |    |__/ | |  \\ |  \\ / \\
                `}
            </pre>
        </div>
    );
}

export default Header;
