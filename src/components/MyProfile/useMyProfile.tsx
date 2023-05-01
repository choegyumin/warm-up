import { authAPI, userAPI, userQueryKeys } from '@/api';
import { HTTPResponse } from '@/services/api/https/interface';
import { User } from '@/types/User';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function useHome() {
  /** @todo 토큰 매니저 구현 */
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const loginMutation = useMutation({ mutationFn: authAPI.login });

  const profileQuery = useQuery<HTTPResponse<User>>({
    queryKey: userQueryKeys.getProfile(),
    queryFn: userAPI.getProfile,
    enabled: accessToken != null,
  });
  const profile = profileQuery.data?.body;

  const onLoginClick = async (event: React.MouseEvent<HTMLElement>) => {
    const res = await loginMutation.mutateAsync();
    setAccessToken(res.body.accessToken);
  };

  const onLogoutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAccessToken(null);
    profileQuery.remove();
  };

  return {
    profile,
    onLoginClick,
    onLogoutClick,
  };
}
