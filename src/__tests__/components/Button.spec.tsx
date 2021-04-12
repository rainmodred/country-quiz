import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  it('renders Button', () => {
    const { container, getByText } = render(<Button>button</Button>);

    expect(getByText(/button/i)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
