import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Viewport } from './Viewport';
import { useViewport } from '@/hooks/useViewport';

vi.mock('@/hooks/useViewport', () => ({
  useViewport: vi.fn(),
}));

describe('Viewport component', () => {
  it('should display screen values', () => {
    vi.mocked(useViewport).mockImplementationOnce(() => ({ x: 123, y: 567 }));
    render(<Viewport />);
    expect(screen.getByText(/x: 123, y: 567/i)).toBeInTheDocument();
  });

  it('should display screen values', () => {
    vi.mocked(useViewport).mockImplementationOnce(() => ({ x: 987, y: 657 }));
    render(<Viewport />);
    expect(screen.getByText(/x: 987, y: 657/i)).toBeInTheDocument();
  });
});
