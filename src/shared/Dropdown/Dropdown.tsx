import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  activator: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  As?: 'ul' | 'div',
  className?: string,
}

const NOOP = () => {}

export function Dropdown({ activator, children, isOpen, onOpen = NOOP, onClose = NOOP, As = 'div', className = '' }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const handleOpen = () => {
    if (!isOpen) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { activator }
        {isDropdownOpen && (
          <div className={`${styles.listContainer} ${className}`}>
            <As
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              { children }
            </As>
          </div>
        )}
      </div>
    </div>
  );
}
