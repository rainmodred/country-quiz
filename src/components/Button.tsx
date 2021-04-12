/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../styles/colors';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

export default function Button({ children, primary, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      css={css`
        border-radius: 12px;
        font-size: 18px;
        line-height: 27px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in;
        padding: ${primary ? '15px 36px 14px 37px' : ' 18px 61px 17px 61px'};
        border: ${primary ? 'none' : `2px solid ${colors.colorResult}`};
        color: ${primary ? colors.colorWhite : colors.colorResult};
        background: ${primary ? colors.colorHover : 'none'};
        box-shadow: ${primary ? `0px 2px 4px ${colors.colorShadow}` : 'none'};
        &:hover {
          opacity: 0.7;
        }
      `}
    >
      {children}
    </button>
  );
}
