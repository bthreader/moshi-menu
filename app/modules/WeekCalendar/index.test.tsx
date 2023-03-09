import { render, screen } from '@testing-library/react';
import WeekCalendar from '.';

describe('WeekCalendar', () => {
  it('renders correct', async () => {
    render(<WeekCalendar />);

    expect(screen.getByText('Hello World!')).toBeVisible;
  });
});
