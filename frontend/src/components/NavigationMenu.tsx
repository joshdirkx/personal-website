import React, {useState} from 'react';

function NavigationMenu() {
    const [isArticlesOpen, setIsArticlesOpen] = useState(false);

    const toggleArticlesOpen = () => {
        setIsArticlesOpen(!isArticlesOpen);
    };

    const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);

    const toggleCaseStudiesOpen = () => {
        setIsCaseStudiesOpen(!isCaseStudiesOpen);
    };

    return (
        <div>
            <div>
                about
            </div>
            <div>
                <div
                    className="cursor-pointer"
                    onClick={toggleArticlesOpen}
                >
                    articles
                </div>

                {isArticlesOpen && (
                    <ul className="list-disc pl-5">
                        <li>article 1</li>
                        <li>article 2</li>
                        <li>article 3</li>
                    </ul>
                )}
            </div>
            <div>
                <div
                    className="cursor-pointer"
                    onClick={toggleCaseStudiesOpen}
                >
                    case studies
                </div>

                {isCaseStudiesOpen && (
                    <ul className="list-disc pl-5">
                        <li>case study 1</li>
                        <li>case study 2</li>
                        <li>case study 3</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NavigationMenu;
