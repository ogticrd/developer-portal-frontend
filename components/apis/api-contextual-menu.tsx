import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../context/language.context'

export default function ApiContextualMenu() {
  const router = useRouter()
  const [hash, setHash] = useState('')

  useEffect(() => {
    setHash(document.location.hash)
    return () => { }
  }, [router])

  const { t } = useContext<any>(LanguageContext)

  const menuItems = [
    {
      hash: '#documentation',
      label: t.apiDetails.contextualMenu.documentation,
    },
    { hash: '#api', label: t.apiDetails.contextualMenu.api },
    // { hash: '#support', label: t.apiDetails.contextualMenu.support },
  ]

  return (
    <div className="sticky top-36 z-20 right-12 shadow-lg bg-white pr-6 rounded-lg py-6 float-right">
      <h3 className="text-lg font-semibold ml-6 text-primary">
        {t.apiDetails.contextualMenu.content}
      </h3>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.hash}
            className={`mt-2 ${hash === item.hash ? 'border-l-4 border-blue-500' : ''
              }`}
          >
            <Link href={item.hash}>
              <a className="contextual-item ml-6">{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
