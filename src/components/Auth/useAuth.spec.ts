import { renderHook, act } from '@testing-library/react';
import { useAuth } from './AuthContext';

describe('useAuth hook', () => {
  it('should toggle values', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoggedIn).toBe(false);

    act(() => {
      result.current.toggleLoggedIn();
    });
    // waitFor()

    expect(result.current.isLoggedIn).toBe(true);
  });

  it('should set value to true', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoggedIn).toBe(false);

    act(() => {
      result.current.logIn();
    });
    // waitFor()

    expect(result.current.isLoggedIn).toBeTruthy();
  });

  it('should login', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoggedIn).toBe(false);

    act(() => {
      result.current.logIn();
    });
    // waitFor()

    expect(result.current.isLoggedIn).toBeTruthy();
  });

  it('should logout', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoggedIn).toBe(false);

    act(() => {
      result.current.logIn();
      result.current.logOut();
    });
    // waitFor()

    expect(result.current.isLoggedIn).toBeFalsy();
  });
});
