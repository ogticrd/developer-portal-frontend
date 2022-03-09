import Link from 'next/link';
import React, { useContext } from 'react';
import { LanguageContext } from '../context/language.context';

export default function LogoHeader() {
    const { t } = useContext<any>(LanguageContext)

    return <div>
        <Link href="/">
            <a className="flex items-center gap-4" title={t.header.home}>
                <img src="/icons/APISlogo.svg" alt="APIS Logo" />
            </a>
        </Link>
    </div>;
}
