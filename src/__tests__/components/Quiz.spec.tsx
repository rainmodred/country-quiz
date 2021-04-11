import { fireEvent, render } from '@testing-library/react';
import { useCountries } from 'hooks/useCountries';
import { countries } from '../../countries';
import Quiz from '../../components/Quiz/Quiz';

jest.mock('../../hooks/useCountries', () => ({
  useCountries: jest.fn(),
}));

describe('Quiz', () => {
  beforeEach(() => {
    useCountries.mockImplementation(() => ({}));
  });

  it('quiz can be ended', () => {
    useCountries.mockImplementation(() => ({
      countries,
    }));
    const { getByText } = render(<Quiz totalQuestions={1} />);

    fireEvent.click(getByText(/^A$/i));
    fireEvent.click(getByText(/Next/i));

    expect(getByText(/Result/i)).toBeTruthy();
  });
});
