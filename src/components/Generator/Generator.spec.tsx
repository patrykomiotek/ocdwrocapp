import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Generator } from './Generator';

vi.mock('uuid', () => ({
  v4: vi
    .fn()
    .mockImplementationOnce(() => 'kaczka')
    .mockImplementationOnce(() => 'pomidor'),
}));

// afterEach(() => {
//   vi.clearAllMocks();
// });

describe('Generator component', () => {
  it('should generate new values', () => {
    const { debug } = render(<Generator />);
    // const first = screen.getByText(/^[0-9a-fA-F-]{36}$/).textContent;
    // const first = screen.getByText('kaczka').textContent;

    expect(screen.getByText('kaczka')).toBeInTheDocument();

    // fireEvent.click(screen.getByRole('button', { name: /regenerate/i }));
    fireEvent.click(screen.getByRole('button'));

    // const second = screen.getByText(/^[0-9a-fA-F-]{36}$/).textContent;
    debug();
    // expect(second).not.toBe(first);
    expect(screen.getByText('pomidor')).toBeInTheDocument();
  });
});
