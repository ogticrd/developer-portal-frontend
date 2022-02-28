import React, { useContext } from 'react';
import { LanguageContext } from '../context/language.context';
import LanguageToggle from './language-toggle.component';

export default function ChangePortal() {
    const { t } = useContext<any>(LanguageContext)

    return <div className='flex gap-8 text-white topbar-right mt-8 md:mt-0 mx-auto md:mx-0 font-medium text-sm'>
        <span className="portal-inactive">
            <p className='py-4 flex items-center'>{t.header.menu.designers}</p>
        </span>
        <span className="portal-active">
            <p className='py-4 flex items-center'>{t.header.menu.developers}</p>
        </span>
        <div className="p-4 hidden md:flex items-center border-l border-gray-400 ">

            <LanguageToggle />
        </div>

    </div>;
}
