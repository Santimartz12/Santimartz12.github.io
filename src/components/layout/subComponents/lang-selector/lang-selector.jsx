import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import i18next from 'i18next';

// Resources
import en from '../../../../resources/svg/lang/en.svg';
import es from '../../../../resources/svg/lang/es.svg';

// Styles
import './lang-selector.css';

const languages = [
    { code: 'es', label: 'Español', icon: es },
    { code: 'en', label: 'English', icon: en },
];

export const LangSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (lang) => {
        setSelectedLanguage(lang);
        i18next.changeLanguage(lang);
        setIsOpen(false);
    };

    const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

    return (
        <div className="custom-select">
            <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
                <SVG src={selectedLang.icon} width={24} height={24} />
                <span>{selectedLang.label}</span>
            </div>
            {isOpen && (
                <div className="options">
                    {languages.map((lang) => (
                        <div key={lang.code} className="option" onClick={() => handleSelect(lang.code)}>
                            <SVG src={lang.icon} width={24} height={24} />
                            <span>{lang.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
