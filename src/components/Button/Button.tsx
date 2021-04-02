import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

export default function Button({ children, primary }: ButtonProps) {
  const isPrimary = primary ? 'button--primary' : '';
  const classses = `button ${isPrimary}`;

  return (
    <button type="button" className={classses}>
      {children}
    </button>
  );
}
