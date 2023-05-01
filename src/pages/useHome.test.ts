import { renderHook } from '@testing-library/react';
import useHome from './useHome';

describe('useHome', () => {
  test('should alert when description is clicked', () => {
    const { result } = renderHook(() => useHome());
    const { onDescriptionClick } = result.current;

    jest.spyOn(window, 'alert').mockImplementation();
    onDescriptionClick({});

    expect(window.alert).toBeCalledWith('Hello, World!');
  });
});
