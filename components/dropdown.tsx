import { useEffect } from 'react';

export default function Dropdown({
  children,
  onClose,
}: {
  children: any;
  onClose: Function;
}) {
  const listenClickOutside = () => onClose();

  useEffect(() => {
    document.addEventListener('click', listenClickOutside);

    return () => {
      document.removeEventListener('click', listenClickOutside);
    };
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="p-2 bg-white rounded-md shadow-md absolute"
    >
      {children}
    </div>
  );
}
