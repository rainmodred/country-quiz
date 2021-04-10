import { render } from '@testing-library/react';
import Option from '../../components/Option/Option';

describe('Option', () => {
  it('renders Option', () => {
    const { container, getByText } = render(
      <Option text="test" onClick={() => {}} disabled={false} />,
    );

    expect(getByText(/test/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders correct Option', () => {
    const { container, getByText, queryByTitle } = render(
      <Option text="test" onClick={() => {}} disabled correct />,
    );

    expect(getByText(/test/i)).toBeTruthy();
    expect(queryByTitle(/checkIcon/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders wrong Option', () => {
    const { container, getByText, queryByTitle } = render(
      <Option text="test" onClick={() => {}} disabled error />,
    );

    expect(getByText(/test/i)).toBeTruthy();
    expect(queryByTitle(/closeIcon/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
