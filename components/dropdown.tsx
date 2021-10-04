import { useEffect } from 'react'

export default function Dropdown({
  children,
  onClose,
  padding = true,
}: {
  children: any
  onClose: Function
  padding?: boolean
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
      className={`z-30 ${
        padding ? 'p-2' : ''
      } bg-white rounded-md shadow-lg absolute`}
    >
      {children}
    </div>
  )
}
