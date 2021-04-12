import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/';
import { ImSpinner8 } from 'react-icons/im';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const StyledSpinner = styled(ImSpinner8)({
  animation: `${spin} 1s linear infinite`,
});

StyledSpinner.defaultProps = {
  'aria-label': 'loading',
};

export default function Spinner() {
  return <StyledSpinner className="spinner" size="60px" title="spinner" />;
}

export { Spinner };
