import { render } from '@testing-library/react';
import Option from '../../components/Option';

describe('Option', () => {
  it('renders Option', () => {
    const { container, getByText } = render(
      <Option
        answer={{ variant: 'A', text: 'test', correct: false }}
        onClick={() => {}}
        disabled={false}
      />,
    );

    expect(getByText(/test/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders correct Option', () => {
    const { container, getByText, queryByTitle } = render(
      <Option
        answer={{ variant: 'A', text: 'test', correct: true }}
        onClick={() => {}}
        disabled
      />,
    );

    expect(getByText(/test/i)).toBeTruthy();
    expect(queryByTitle(/checkIcon/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders wrong Option', () => {
    const { container, getByText, queryByTitle } = render(
      <Option
        answer={{ variant: 'A', text: 'test', correct: false }}
        onClick={() => {}}
        disabled
        wrong
      />,
    );

    expect(getByText(/test/i)).toBeTruthy();
    expect(queryByTitle(/closeIcon/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
