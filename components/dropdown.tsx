import { useEffect } from 'react'

export default function Dropdown({
  children,
  onClose,
  padding = true,
  className
}: {
  children: any
  onClose: Function
  padding?: boolean
  className?: string
}) {
  const listenClickOutside = () => onClose()

  useEffect(() => {
    document.addEventListener('click', listenClickOutside)

    return () => {
      document.removeEventListener('click', listenClickOutside)
    }
  }, [])

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${className} z-30 mt-3 ${padding ? 'p-2' : ''
        } bg-white rounded-md shadow-lg absolute`}
    >
      {children}
    </div>
  )
}
