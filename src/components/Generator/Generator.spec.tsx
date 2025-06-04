import { render, screen, fireEvent } from '@testing-library/react';
import { Generator } from './Generator';

describe('Generator component', () => {
  it('should generate new values', () => {
    render(<Generator />);
    const first = screen.getByText(/^[0-9a-fA-F-]{36}$/).textContent;

    // fireEvent.click(screen.getByRole('button', { name: /regenerate/i }));
    fireEvent.click(screen.getByRole('button'));

    const second = screen.getByText(/^[0-9a-fA-F-]{36}$/).textContent;

    expect(second).not.toBe(first);
  });
});
