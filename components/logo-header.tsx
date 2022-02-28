import Link from 'next/link';
import React, { useContext } from 'react';
import { LanguageContext } from '../context/language.context';
import Image from 'next/image'

export default function LogoHeader() {
    const { t } = useContext<any>(LanguageContext)

    return <div>
        <Link href="/">
            <a className="flex items-center gap-4" title={t.header.home}>
                <div className='border-r pr-4 border-gray-400'>

                    <Image
                        src="/images/gob-icon.svg"
                        width={30}
                        height={30}
                        alt="Government logo"
                    />
                </div>
                <h2 className='text-white leading-none	'>{t.header.title} <br /> <b> {t.header.subtitle}</b></h2>
            </a>
        </Link>
    </div>;
}
