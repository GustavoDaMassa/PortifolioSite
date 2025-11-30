import { useState } from 'react';
import styles from './SideMenu.module.css';

export const SideMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
      {isOpen && (
        <div className={styles.sideMenu}>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
