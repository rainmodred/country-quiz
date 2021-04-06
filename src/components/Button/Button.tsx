import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

export default function Button({ children, primary, onClick }: ButtonProps) {
  const isPrimary = primary ? 'button--primary' : '';
  const classses = `button ${isPrimary}`;

  return (
    <button onClick={onClick} type="button" className={classses}>
      {children}
    </button>
  );
}
