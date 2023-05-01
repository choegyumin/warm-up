import '@testing-library/jest-dom/extend-expect';
import queryClient from '@/services/api/queries/client';
import { server as apiServer } from './src/services/api/mocks/server';

jest.mock('@/components/AppProvider/AppProvider');
jest.mock('@/services/api/queries/client');

beforeAll(() => {
  apiServer.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => {
  apiServer.resetHandlers();
  queryClient.clear();
  jest.clearAllMocks();
});

afterAll(() => {
  apiServer.close();
});
