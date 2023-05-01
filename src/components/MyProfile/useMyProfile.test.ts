import { authMockAPI, userMockAPI } from '@/api';
import AppProvider from '@/components/AppProvider';
import setupAPIMocks from '@/services/api/mocks/setup';
import { act, renderHook } from '@testing-library/react';
import useMyProfile from './useMyProfile';

describe('useMyProfile', () => {
  beforeEach(() => {
    setupAPIMocks(authMockAPI.login.default, userMockAPI.getProfile.default);
  });

  test('should fill profile state when login', async () => {
    const { result } = renderHook(() => useMyProfile(), { wrapper: AppProvider });
    const { onLoginClick } = result.current;

    await act(async () => {
      await onLoginClick({} as React.MouseEvent<HTMLElement>);
    });

    const { profile } = result.current;
    expect(profile?.name).toBe('John Doe');
  });
});
