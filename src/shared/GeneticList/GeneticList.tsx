import React from 'react';
import styles from './geneticlist.css';

interface IItem {
  id: string,
  icon?: React.ReactNode,
  text?: string,
  className?: string,
  onClick: (id: string) => void,
  As?: 'a' | 'li' | 'button' | 'div',
  href?: string,
}


interface IGeneticListProps {
  list: IItem[],
}

export function GeneticList({ list }: IGeneticListProps) {
  return (
    <>
      {
        list.map(({ As = 'div', icon, text, onClick, className, id, href}) => (
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
          >
            { icon && icon }
            { text }
          </As>
        ))
      }
    </>
  );
}
